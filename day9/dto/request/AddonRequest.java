package mobilerecharge.meenakshi.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AddonRequest {

    private String addonname;
    private String description;
    private String price;
    private String validity;
}