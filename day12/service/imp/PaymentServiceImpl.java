package mobilerecharge.meenakshi.service.imp;







import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mobilerecharge.meenakshi.dto.request.PaymentRequest;

import mobilerecharge.meenakshi.dto.response.PaymentListResponse;
import mobilerecharge.meenakshi.dto.response.PaymentResponse;

import mobilerecharge.meenakshi.model.Payment;

import mobilerecharge.meenakshi.repository.PaymentRepository;

import mobilerecharge.meenakshi.service.PaymentService;




@Service
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Override
    public PaymentResponse createPayment(PaymentRequest event) {

        var eve = Payment.builder()
                        .method(event.getMethod())
                        .amount(event.getAmount())
                        .date(event.getDate())
                        
                       .build();

        paymentRepository.save(eve);

        return PaymentResponse.builder().message("Plan added successfully").build();
    }
@Override 
public PaymentListResponse getAllPayment(){
    List<Payment> payment=paymentRepository.findAll();
    return PaymentListResponse.builder().payment(payment).build();
}
   


}