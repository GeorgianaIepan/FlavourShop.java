package msg.skillup.repository;

import msg.skillup.model.Order;
import msg.skillup.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    @Query("SELECT o from Order o where o.user.idUser =? 1")
    List<Order> findAllByUser(Long userId);
}
