package mobilerecharge.meenakshi.service;

import java.util.List;

import mobilerecharge.meenakshi.model.User;
import mobilerecharge.meenakshi.dto.request.RegisterRequest;
import mobilerecharge.meenakshi.dto.response.RegisterResponse;
import mobilerecharge.meenakshi.dto.response.UserDetailResponse;

public interface UserService {

    RegisterResponse register(RegisterRequest request);

    UserDetailResponse getUser(String email);

    List<User> getAllUser();
}

    