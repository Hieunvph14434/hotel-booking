# Environment settings
if [ ! -f .env ]; then
echo "=== Copy .env  ==="
cp .env.example .env

# Edit value DB_CONNECTION, DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD
sed -i 's/DB_CONNECTION=mysql/DB_CONNECTION=mysql/' .env
sed -i 's/DB_HOST=127.0.0.1/DB_HOST=db/' .env
sed -i 's/DB_PORT=3306/DB_PORT=3306/' .env
sed -i 's/DB_DATABASE=laravel/DB_DATABASE=laravel-booking/' .env
sed -i 's/DB_USERNAME=root/DB_USERNAME=root/' .env
sed -i 's/DB_PASSWORD=/DB_PASSWORD=123456/' .env
# Giá trị mới cho CLOUDINARY_URL và CLOUDINARY_UPLOAD_PRESET
# sed -i 's/CLOUDINARY_URL=xxxxxxxxxxxxx/CLOUDINARY_URL="cloudinary://435919993733813:ABH2bdLCbBGf-_LXENyLQzqxNA8@dpqkbfckw"/' .env
NEW_CLOUDINARY_URL="cloudinary://435919993733813:ABH2bdLCbBGf-_LXENyLQzqxNA8@dpqkbfckw"

# Sửa giá trị trong tệp
sed -i "s|^CLOUDINARY_URL=.*|CLOUDINARY_URL=$NEW_CLOUDINARY_URL|" .env
sed -i 's/CLOUDINARY_UPLOAD_PRESET=xxxxxxxxxxxxx/CLOUDINARY_UPLOAD_PRESET=booking/' .env

echo "=== Copy is done!  ==="
fi

echo "=== Execute docker-compose build... ==="
docker-compose build
echo "=== docker-compose build is done!! ==="

echo "=== Execute docker-compose up... ==="
docker-compose up -d
echo "=== docker-compose up is done!! ==="

# Install & Update composer
if [ -z "$(ls -A vendor)" ]; then
    echo "=== Installing composer... ==="
    docker-compose exec -it app composer install
    echo "=== Composer build is done!! ==="
else
    echo "=== Update composer... ==="
    docker-compose exec -it app composer update --no-plugins --no-scripts
    echo "=== Composer build is done!! ==="
fi

# Generating the app key
if grep -q "APP_KEY=" .env; then
    echo "==== Generating the app key ==="
    docker-compose exec -it app php artisan key:generate
    echo "==== App key generating is done!! ==="
else
    echo "==== APP_KEY already exists in .env ==="
fi

# Kiểm tra xem biến JWT_SECRET đã được đặt trong .env hay không
if grep -q '^JWT_SECRET=' .env; then
  echo "Giá trị của JWT_SECRET đã được đặt trong .env."
else
  echo "Giá trị của JWT_SECRET không tồn tại trong .env. Đang tạo giá trị mới..."
  docker-compose exec -it app php artisan jwt:secret
  echo "Giá trị mới của JWT_SECRET đã được tạo và đặt trong .env."
fi

echo "==== Migrating and seed database ==="
docker-compose exec -it app php artisan migrate
echo "==== Migrating and seed database is done!! ==="

docker-compose exec -it app php artisan db:seed

