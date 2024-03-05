package mobilerecharge.meenakshi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mobilerecharge.meenakshi.model.Payment;


public interface PaymentRepository extends JpaRepository<Payment,Integer>{

}
