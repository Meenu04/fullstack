
package mobilerecharge.meenakshi.dto.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import mobilerecharge.meenakshi.model.Payment;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaymentListResponse {
private List<Payment> payment;
}
