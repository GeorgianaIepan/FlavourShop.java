
insert into ROLE(name_role) values ('admin')
insert into ROLE(name_role) values ('user')

insert into USER_TABLE(username, name, password, id_role) values ('iepang', 'Georgiana', '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 1)

insert into PRODUCT(PRICE_PRODUCT, NAME_PRODUCT, STOCK_PRODUCT, DESCRIPTION) values (10, 'Soap', 100, 'Flavor Soap gives sensitive skin that wonderful clean sensation it deserves. It works in harmony with the natural PH of the skin and the level of hydration to remove the sensation of "tight" skin and the discomfort caused by its drying: 100 g');
insert into PRODUCT(PRICE_PRODUCT, NAME_PRODUCT, STOCK_PRODUCT, DESCRIPTION) values (15, 'Shower gel', 100, 'Suitable for all skin types, the shower gel leaves the skin soft, clean and hydrated, the foam transforming from a light gel texture into a super-fine foam: 500 ml');
insert into PRODUCT(PRICE_PRODUCT, NAME_PRODUCT, STOCK_PRODUCT, DESCRIPTION) values (25, 'Shampoo', 100, 'Give love to dry hair prone to breakage with the help of our intense repairing shampoo Flavor. Our shampoo strengthens the hair and reduces its breakage. It leaves dry hair looking hydrated and feeling healthier, fresher and intensely nourished: 750 ml');
insert into PRODUCT(PRICE_PRODUCT, NAME_PRODUCT, STOCK_PRODUCT, DESCRIPTION) values (20, 'Body lotion', 100, 'Our Flavor moisturizing lotion helps protect skin against dryness, offering 72 hours of hydration for skin that feels instantly smoother. This lotion helps you enjoy smoother skin, which looks healthier and feels hydrated: 300 ml');
insert into PRODUCT(PRICE_PRODUCT, NAME_PRODUCT, STOCK_PRODUCT, DESCRIPTION) values (10, 'Hand cream', 100, 'Keep your hands dry, sensitive, soft, velvety and protected against dryness with our intensely moisturizing Flavor Hand Balm. Our balm cares for nails and cuticles and nourishes dry, sensitive skin with 96 hours of hydration: 100 ml');
insert into PRODUCT(PRICE_PRODUCT, NAME_PRODUCT, STOCK_PRODUCT, DESCRIPTION) values (20, 'Body spray', 100, 'Smell irresistible with our Flavor body spray, with an improved formula. Our spray leaves the skin instantly refreshed and smelling of ripe mango from head to toe: 250 ml');


insert into INGREDIENT(PRICE_INGREDIENT, NAME_INGREDIENT) values (5, 'Coconut');
insert into INGREDIENT(PRICE_INGREDIENT, NAME_INGREDIENT) values (5, 'Olive');
insert into INGREDIENT(PRICE_INGREDIENT, NAME_INGREDIENT) values (5, 'Orange');
insert into INGREDIENT(PRICE_INGREDIENT, NAME_INGREDIENT) values (5, 'Lemon');
insert into INGREDIENT(PRICE_INGREDIENT, NAME_INGREDIENT) values (5, 'Argan');
insert into INGREDIENT(PRICE_INGREDIENT, NAME_INGREDIENT) values (5, 'Aloe vera');
insert into INGREDIENT(PRICE_INGREDIENT, NAME_INGREDIENT) values (5, 'Mint');
insert into INGREDIENT(PRICE_INGREDIENT, NAME_INGREDIENT) values (5, 'Tea tree');

insert into ORDER_TABLE(ID_USER, ADDRESS) values (1, 'Str BlaBla 1');
insert into ORDER_TABLE(ID_USER, ADDRESS) values (1, 'Str BlaBla 1');
insert into ORDER_PRODUCT(ID_ORDER, ID_PRODUCT, QUANTITY_ORDER_PRODUCT) values (1, 1, 1);
insert into ORDER_PRODUCT(ID_ORDER, ID_PRODUCT, QUANTITY_ORDER_PRODUCT) values (1, 2, 1);
insert into ORDER_PRODUCT(ID_ORDER, ID_PRODUCT, QUANTITY_ORDER_PRODUCT) values (2, 2, 5);
insert into REVIEW(ID_USER, ID_PRODUCT, TEXT_REVIEW, RATING) values (1, 1, 'Best Product', 5);





