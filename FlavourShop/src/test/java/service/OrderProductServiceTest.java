package service;

import msg.skillup.dto.OrderDTO;
import msg.skillup.service.OrderProductService;
import org.junit.Test;

import static org.junit.jupiter.api.Assertions.*;

public class OrderProductServiceTest {

    static OrderProductService orderProductService = new OrderProductService();

    /**
     * ->Test care utilizeaza ECP pentru date valide
     */
    @Test
    public void testGetOrderByUser_validInputs_returnsOrderDTO() {
        // Arrange
        Long orderId = 1L;
        Long userId = 2L;

        // Act
        OrderDTO result = orderProductService.getOrderByUser(orderId, userId);

        // Assert
        assertNotNull(result);
        assertEquals(orderId, result.getId());
        assertFalse(result.getProducts().isEmpty());
    }

    /**
     * ->Test pentru ECP care utilizeza date non-valide
     */
    @Test(expected = IllegalArgumentException.class)
    public void testGetOrderByUserWithInvalidInputs() {
        // Arrange
        Long orderId = -1L;
        Long userId = null;

        // Act
        OrderDTO result = orderProductService.getOrderByUser(orderId, userId);

        // Assert - se așteaptă o excepție de tip IllegalArgumentException
        try{
            assertNotEquals(orderId, result.getId());
            assertNotEquals(userId, result.getId());
            assertTrue(result.getProducts().isEmpty());
        } catch (IllegalArgumentException illegalArgumentException){

        }
    }

    /**
     * ->Test pentru BVA cre utilizeaza date valide:
     */
    @Test
    public void testGetOrderByUserWithValidInputs() {
        // Arrange
        Long orderId = 1L;
        Long userId = 1L;

        // Act
        OrderDTO result = orderProductService.getOrderByUser(orderId, userId);

        // Assert
        assertNotNull(result);
        assertEquals(orderId, result.getId());
        assertTrue(result.getProducts().isEmpty());
    }

    /**
     * ->Test pentru BVA care utilizeaza date non-valide:
     */
    @Test(expected = RuntimeException.class)
    public void testGetOrderByUser_negativeOrderId_throwsException() {
        // Arrange
        Long orderId = -1L;
        Long userId = 2L;

        // Act
        OrderDTO result = orderProductService.getOrderByUser(orderId, userId);

        // Assert - Expect an exception to be thrown
        try{
            assertNotEquals(orderId, result.getId());
            assertNotEquals(userId, result.getId());
            assertTrue(result.getProducts().isEmpty());
        } catch (IllegalArgumentException illegalArgumentException){

        }
    }
}