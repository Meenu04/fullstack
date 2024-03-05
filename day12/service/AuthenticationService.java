package mobilerecharge.meenakshi.service;

import mobilerecharge.meenakshi.dto.request.ForgotPasswordRequest;
import mobilerecharge.meenakshi.dto.request.LoginRequest;
import mobilerecharge.meenakshi.dto.request.RegisterRequest;
import mobilerecharge.meenakshi.dto.response.ForgotPasswordResponse;
import mobilerecharge.meenakshi.dto.response.LoginResponse;
import mobilerecharge.meenakshi.dto.response.RegisterResponse;


public interface AuthenticationService {

    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

    ForgotPasswordResponse forgotPassword(ForgotPasswordRequest request);
    
}