package msg.skillup.model;


import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "users")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_Sequence")
    @SequenceGenerator(name = "user_Sequence", sequenceName = "USER_SEQ")
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "city")
    private String city;

}