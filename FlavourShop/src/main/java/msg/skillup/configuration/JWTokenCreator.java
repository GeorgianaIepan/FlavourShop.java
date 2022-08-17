package msg.skillup.configuration;

import io.jsonwebtoken.SignatureAlgorithm;
import msg.skillup.model.User;
import oracle.jdbc.driver.JsonWebToken;
import oracle.jdbc.driver.OpaqueAccessToken;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.time.OffsetDateTime;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
@Component
public class JWTokenCreator {
    public static final int JWT_TOKEN_VALIDITY = 3000;
    @Value("JavaInUse")
    private String secret;

    public String generateToken(User user) {
        Map<String, Object> claims = new HashMap<>();
        return getJwtToken(claims, user.getUsername());
    }
    public String getJwtToken(Map<String, Object> claims, String subject){
        return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY * 1000))
                .signWith(SignatureAlgorithm.HS512, secret).compact();
    }
}
