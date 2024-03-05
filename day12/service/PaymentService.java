package mobilerecharge.meenakshi.service;

import mobilerecharge.meenakshi.dto.request.PaymentRequest;

import mobilerecharge.meenakshi.dto.response.PaymentListResponse;
import mobilerecharge.meenakshi.dto.response.PaymentResponse;


public interface PaymentService {
    PaymentResponse createPayment(PaymentRequest payment);
    PaymentListResponse getAllPayment();
}