package msg.skillup.model;
import lombok.Data;
import msg.skillup.dto.OrderProductDTO;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "ORDER_TABLE")
@Data
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_ORDER")
    private Long idOrder;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "ID_USER")
    private User user;

    @Column(name = "ADDRESS", nullable = false)
    private String address;
}
