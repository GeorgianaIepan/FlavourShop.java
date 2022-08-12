
insert into ROLE(name_role) values ('admin')

insert into USER_TABLE(username, name, password, id_role) values ('iepang', 'Georgiana', '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 1)

insert into PRODUCT(PRICE_PRODUCT, NAME_PRODUCT, STOCK_PRODUCT, DESCRIPTION) values (5.5, 'Shampoo', 10, 'Best Shampoo');
insert into PRODUCT(PRICE_PRODUCT, NAME_PRODUCT, STOCK_PRODUCT, DESCRIPTION) values (10, 'Candle', 10, 'Best Candle');

insert into INGREDIENT(PRICE_INGREDIENT, NAME_INGREDIENT) values (5.5, 'Coconut oil');

insert into PRODUCT_INGREDIENT(ID_INGREDIENT, ID_PRODUCT, QUANTIY_PRODUCT_INGREDIENT) values (1, 1, 1);

insert into ORDER_TABLE(ID_USER, ADDRESS) values (1, 'Str BlaBla 1');
insert into ORDER_TABLE(ID_USER, ADDRESS) values (1, 'Str BlaBla 1');
insert into ORDER_PRODUCT(ID_ORDER, ID_PRODUCT, QUANTITY_ORDER_PRODUCT) values (1, 1, 1);
insert into ORDER_PRODUCT(ID_ORDER, ID_PRODUCT, QUANTITY_ORDER_PRODUCT) values (1, 2, 1);
insert into ORDER_PRODUCT(ID_ORDER, ID_PRODUCT, QUANTITY_ORDER_PRODUCT) values (2, 2, 5);
insert into REVIEW(ID_USER, ID_PRODUCT, TEXT_REVIEW, RATING) values (1, 1, 'Best Product', 5);



