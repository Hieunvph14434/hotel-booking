<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
   <style>
    .gradient-custom-2 {
    background: rgb(49 175 17);
    }

    .color-green {
       color: rgb(49 175 17);
    }

@media (min-width: 768px) {
.gradient-form {
height: 100vh !important;
}
}
@media (min-width: 769px) {
.gradient-custom-2 {
border-top-right-radius: .3rem;
border-bottom-right-radius: .3rem;
}
}
.square-container {
    width: 100%;  
    height: 100%;  
    position: relative;
    background-color: #e0e0e0; 
}

.square-content {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
}

.square-content::before,
.square-content::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px; 
    background-color: #ccc; 
}

.square-content::before {
    transform: rotate(-45deg);
}

.square-content::after { 
    transform: rotate(45deg);
}
.form-control.border-bot {
    border-bottom: 1px solid black; 
    border-radius: 0; 
}
.b-right::before {
    content: '';
    position: absolute;
    top: 25px;
    bottom: 25px;
    right: 0;
    width: 2px;
    background-color: #9981813d; 
}
input.form-control.border-bot {
  background: none;
  outline: none;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid black;
}

input.form-control.border-bot:focus {
  box-shadow: none;
  outline: none;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid black;
}
   </style>
</head>
<body>
    <section class="h-100 gradient-form" style="background-color: #eee;">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black">
                <div class="row g-0">
                  <div class="col-lg-6 b-right position-relative" style="background: #e0e0e0">
                    <div class="card-body card-body w-75 ps-5 pe-0 w-75">
      
                      <div class="text-start">
                        <h4 class="mt-1 mb-5 pb-1">Hotel Booking</h4>
                      </div>
      
                      <form method="POST" action="{{ route('login') }}">
                        @csrf
                        <p class="fw-bold fs-2">Login</p>
                        <div class="d-flex align-items-center justify-content-start pb-4">
                            <p class="mb-0 me-2">Don't have an account?</p>
                            <a type="button" class="color-green">Request account</a>
                          </div>
      
                        <div class="form-outline mb-{{$errors->has('email') ? 3 : 4 }}">
                          <input type="email" placeholder="Email" id="email" value="{{ old('email') }}" name="email" class="form-control border-bot @error('email') is-invalid @enderror"/>
                        @error('email')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                        </div>
      
                        <div class="form-outline mb-{{$errors->has('email') ? 2 : 3}}">
                          <input type="password" placeholder="Password" id="password" name="password" value="{{ old('password') }}" class="form-control border-bot @error('password') is-invalid @enderror" />
                            @error('password')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>

                        <div class="text-end mb-4 pb-1">
                            <a class="color-green" href="#!">Forgot password?</a>
                        </div>
      
                        <div class="text-center pt-1 mb-1 pb-1">
                          <button class="btn btn-primary btn-block fa-lg gradient-custom-2 fs-5">Log
                            in</button>
                          </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div class="square-container">
                        <div class="square-content"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</body>
</html>