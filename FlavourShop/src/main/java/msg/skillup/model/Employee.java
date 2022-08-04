package msg.skillup.model;


import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "employee")
@Data
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "emp_Sequence")
    @SequenceGenerator(name = "emp_Sequence", sequenceName = "EMP_SEQ")
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "city")
    private String city;

}