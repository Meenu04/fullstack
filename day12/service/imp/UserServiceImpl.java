package mobilerecharge.meenakshi.service.imp;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import mobilerecharge.meenakshi.dto.request.RegisterRequest;
import mobilerecharge.meenakshi.dto.response.RegisterResponse;
import mobilerecharge.meenakshi.dto.response.UserDetailResponse;
import mobilerecharge.meenakshi.model.User;
import mobilerecharge.meenakshi.repository.UserRepository;
import mobilerecharge.meenakshi.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public RegisterResponse register(RegisterRequest request) {
        Optional<User> isUser = userRepository.findByEmail(request.getEmail());
        

        if (isUser.isPresent()) {
            return RegisterResponse.builder()
                                    .message("User already exists with email " + request.getEmail())
                                    .build();
        }

        var user = User.builder()
                        .name(request.getName())
                        .email(request.getEmail())
                        .password(request.getPassword())
                        .build();

        userRepository.save(user);

        return RegisterResponse.builder().message("User registered successfully").build();
    }

    @Override
    public UserDetailResponse getUser(String email) {
        Optional<User> isUser = userRepository.findByEmail(email);
        if (!isUser.isPresent()) {
            return UserDetailResponse.builder()
                        .message("User with email does not exist")
                        .build();
        }
        User user = isUser.get();
        return UserDetailResponse.builder()
                .id(user.getId())
                .email(user.getEmail())
                .name(user.getName())
                .role(user.getRole())
                .build();
    }

    @Override
    public List<User> getAllUser() {
        return userRepository.findAll();
    }
}
