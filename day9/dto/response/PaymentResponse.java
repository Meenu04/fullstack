
package mobilerecharge.meenakshi.dto.response;




import lombok.Builder;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaymentResponse {
 @Builder.Default
    private String message ="Something went wrong.";
}