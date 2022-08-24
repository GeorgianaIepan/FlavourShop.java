package msg.skillup.repository;

import msg.skillup.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
@Repository
public interface UserRepository extends JpaRepository<User, Long>{
    @Query("SELECT us FROM User us WHERE us.username= :username")
    User matchUser(@Param("username") String username);

    @Query("SELECT COUNT(us.idUser) FROM User us WHERE us.username= :username")
    int existsUsername(@Param("username") String username);

    @Query("SELECT us FROM User us WHERE us.verificationCode= :code")
    User findByVerificationCode(@Param("code")String code);
}

