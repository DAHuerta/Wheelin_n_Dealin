DROP DATABASE IF EXISTS car_db;

CREATE DATABASE car_db;

USE car_db;

CREATE TABLE cars (
  id INT NOT NULL AUTO_INCREMENT,
  model VARCHAR(255) NOT NULL,
  make VARCHAR(255) NOT NULL,
  year INT NOT NULL,
  mileage INT NOT NULL,
  type VARCHAR(255) NOT NULL,
  color VARCHAR(255) NOT NULL,
  price INT NOT NULL,
  image VARCHAR(500) NOT NULL,
  hidden BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (id)
);

CREATE TABLE user (
    id int NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    favorite_color VARCHAR(255), 
    favorite_type VARCHAR(255),
    favorite_make VARCHAR(255),
    authorized BOOLEAN DEFAULT FAlSE,
    PRIMARY KEY (id)
);

INSERT INTO cars (model, make, year, mileage, type, color, price, image)
VAlUES
("Mustang", "Ford", 2019, 1600, "Compact Car", "Yellow", 26395, "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/2019-Ford-Mustang-GT-Coupe-Yellow-Peter-Anderson-1200x800p-1.jpg"),
("Mustang", "Ford", 2015, 18006, "Compact Car", "Black", 17300, "https://i.ytimg.com/vi/uC-l93QfGg0/maxresdefault.jpg"),
("Mustang", "Ford", 2016, 15015, "Compact Car", "Red", 24500, "https://i.pinimg.com/originals/f6/0f/d4/f60fd412f22786e3f21c8500de5912ab.jpg"),
("Mustang", "Ford", 1998, 80456, "Compact Car", "White", 6500, "http://www.sharpcar.com/img/uploaded/large/LN_129529_2.jpg"),
("Mustang", "Ford", 2004, 62456, "Compact Car", "Blue", 7500, "https://i.pinimg.com/originals/c7/0c/fa/c70cfae83384b918c93f9de7b2a4a454.jpg"),
("Expedition", "Ford", 2019, 5764, "SUV", "Gray", 52130, "https://vimg.remorainc.com/jrp/1fmju1ht4kea56814/2019-ford-expedition-xlt-stone-gray-metallic-8.jpg"),
("Expedition", "Ford", 2012, 57987, "SUV", "Green", 13530, "https://cdn.jdpower.com/ChromeImageGallery/ColorMatched/White/640/cc_2012FRD006a_640/cc_2012FRD006a_640_JW.jpg"),
("Expedition", "Ford", 1999, 180245, "SUV", "Blue", 7832, "http://www.2040-cars.com/_content/cars/images/24/1179024/001.jpg"),
("Explorer", "Ford", 2002, 89111, "SUV", "White", 5000, "http://www.2040-cars.com/_content/cars/images/24/460324/001.jpg"),
("Explorer", "Ford", 2019, 10481, "SUV", "Black", 32365, "https://www.magiccityfordlexington.net/inventoryphotos/5673/1fm5k8gt2kga95245/sp/4.jpg?height=400"),
("Explorer", "Ford", 2014, 65493, "SUV", "Red", 17666, "https://cdn.carbase.com/dealer/brothers/4148533_98043890_640.jpg"),
("F-150", "Ford", 2008, 101008, "Truck", "Gray", 9290, "http://images.allamericanautomobiles.com/pictures/31547742.jpg"),
("F-150", "Ford", 2019, 3019, "Truck", "Blue", 28155, "https://www.wuwm.com/sites/wuwm/files/styles/x_large/public/201907/truck.png"),
("F-150", "Ford", 2007, 5280, "Truck", "White", 10350, "https://chases.sfo2.cdn.digitaloceanspaces.com/auto/6d5c7a3e0212fa14d97a70d3e226a641.JPG"),
("F-150", "Ford", 2017, 26384, "Truck", "Red", 27600, "https://vimg.remorainc.com/j7i/1ftew1ef9hfa14625/2017-ford-f150-lariat-ruby-red-metallic-tinted-clearcoat-8.jpg"),
("F-250", "Ford", 2010, 96809, "Truck", "Yellow", 27000, "https://images.carstory.com/7560584486356813912/4/t/324x-"),
("F-250", "Ford", 2019, 4201, "Truck", "Green", 33150, "https://www.greenford.com/assets/stock/expanded/white/640/2019fot12_640/2019fot120003_640_01.jpg?height=400"),
("Focus", "Ford", 2000, 123889, "Compact Car", "Green", 4000, "https://s.aolcdn.com/commerce/autodata/images/USB00FOC121A0101.jpg"),
("Focus", "Ford", 2010, 101001, "Compact Car", "Red", 8000, "https://2-photos.motorcar.com/used-2010-ford-focus-4drsedanse-6173-18134378-2-640.jpg"),
("Challenger", "Dodge", 2014, 43766, "Compact Car", "Red", 26495, "https://images.carstory.com/-3221867742535194245/6/t/704x-"),
("Challenger", "Dodge", 2017, 24503, "Compact Car", "White", 30000, "https://cars.usnews.com/static/images/Auto/izmo/i10824739/2017_dodge_challenger_angularfront.jpg"),
("Challenger", "Dodge", 2019, 2345, "Compact Car", "Gray", 36013, "https://www.lindsaychryslerdodgejeepram.com/inventoryphotos/4503/2c3cdzc99kh508437/ip/3.jpg?height=400"),
("Avenger", "Dodge", 2013, 34829, "Compact Car", "Black", 7230, "https://i.pinimg.com/originals/d3/76/97/d37697d852471c539649cf4c1066710a.jpg"),
("Avenger", "Dodge", 2017, 15050, "Compact Car", "Blue", 9500, "https://www.newfordredesign.com/wp-content/uploads/2016/09/2017-Dodge-Avenger-SRT-Wallpapers-HD.jpg"),
("Avenger", "Dodge", 2009, 68391, "Compact Car", "White", 3650, "https://www.carjunction.com/car_images2/34204_46056/46056a.jpg"),
("Viper", "Dodge", 2016, 19664, "Compact Car", "Black", 98998, "http://s3.amazonaws.com/photos.ecarlist.com/Xqk0/80M7/eIC0/HwSF/oMWs/hw_640.jpg"),
("Nitro", "Dodge", 2009, 78920, "SUV", "Gray", 8500, "https://image-cdn.beforward.jp/large/201906/1346567/BG358371_2fc3b8.jpg"),
("Nitro", "Dodge", 2011, 25885, "SUV", "Blue", 23000, "https://espaciocoches.com/wp-content/uploads/2017/11/Dodge-Nitro-precio-vehiculo-compacto-hreao-600x450.jpg"),
("Durango", "Dodge", 2019, 6022, "SUV", "Blue", 30445, "https://pictures.dealer.com/a/allamericancdjsanangelocllc/1752/127d8054f446c8d7c648a71a058c4869x.jpg?impolicy=resize&w=414"),
("Durango", "Dodge", 2011, 61253, "SUV", "Green", 20143, "https://cdn.jdpower.com/ChromeImageGallery/ColorMatched/White/640/cc_2019DOS01_03_640/cc_2019DOS010108_03_640_PFQ.jpg"),
("Ram", "Dodge", 1999, 161233, "Truck", "Black", 9765, "http://www.2040-cars.com/_content/cars/images/14/140214/001.jpg"),
("Ram", "Dodge", 2016, 43255, "Truck", "White", 23667, "https://i.ytimg.com/vi/Ukg7HmtM_l0/hqdefault.jpg"),
("Ram", "Dodge", 2008, 79333, "Truck", "Red", 11450, "http://carphotos.cardomain.com/ride_images/3/2286/1661/30713330067_original.jpg"),
("Caliber", "Dodge", 2008, 88736, "Compact Car", "Red", 8750, "https://listings-prod.tcimg.net/listings/102796/37/14/1B3HB68F08D641437/DQDWGYUXD7VJE3OGCRYK45HYA4-600.jpg"),
("Caliber", "Dodge", 2007, 82001, "Compact Car", "Yellow", 7500, "http://carphotos.cardomain.com/ride_images/2/4596/3141/23989070005_large.jpg"),
("Caravan", "Dodge", 2010, 40882, "Van", "Blue", 9800, "https://inventory-dmg.assets-cdk.com/evox/color_0640_032/6381/6381_cc0640_032_PBS.jpg"),
("Caravan", "Dodge", 2005, 100330, "Van", "Black", 6500, "http://www.2040-cars.com/_content/cars/images/4/384904/001.jpg"),
("Caravan", "Dodge", 2019, 8333, "Van", "Gray", 27040, "https://www.ourismanchryslerdodgejeep.net/assets/stock/ColorMatched_01/White/640/cc_2019DOV17_01_640/cc_2019DOV170002_01_640_PSC.jpg"),
("Caravan", "Dodge", 2000, 122444, "Van", "Green", 4850, "https://dygtyjqp7pi0m.cloudfront.net/i/8611/9945340_1.jpg?v=8CD440BF2F54FC0"),
("Camaro", "Chevy", 2019, 2554, "Compact Car", "Yellow", 40000, "https://www.torquenews.com/sites/default/files/images/2018-chevrolet-camaro-055.jpg"),
("Camaro", "Chevy", 2008, 37839, "Compact Car", "Black", 15500, "https://www.supercars.net/blog/wp-content/uploads/2016/03/2008_Chevrolet_CamaroBlackConcept2.jpg"),
("Camaro", "Chevy", 2014, 15664, "Compact Car", "Red", 24450, "https://static.cargurus.com/images/site/2013/07/10/16/52/2014_chevrolet_camaro-pic-4897054205892425793-640x480.jpeg"),
("Corvette", "Chevy", 1999, 73584, "Compact Car", "Blue", 20000, "https://i.ytimg.com/vi/TdPFJuC-cG0/hqdefault.jpg"),
("Corvette", "Chevy", 2019, 1123, "Compact Car", "Black", 56000, "https://inventory-dmg.assets-cdk.com/RTT/Chevrolet/2019/3866783/default/ext_GBA_deg01x640.jpg"),
("Tahoe", "Chevy", 2019, 3546, "SUV", "Black", 50000, "https://inventory-dmg.assets-cdk.com/2/6/1/19554907162.jpg"),
("Tahoe", "Chevy", 2013, 11997, "SUV", "Gray", 22580, "https://img.vast.com/original/3520058275632423278"),
("Tahoe", "Chevy", 2004, 84029, "SUV", "White", 10040, "http://carphotos.cardomain.com/ride_images/2/3912/2901/22278950002_large.jpg"),
("Colorado", "Chevy", 2015, 31555, "Truck", "White", 16800, "https://cdn04.carsforsale.com/3/316702/30734826/thumb/1402772630.jpg13"),
("Colorado", "Chevy", 2012, 63885, "Truck", "Blue", 13560, "http://assets.trucktrend.com/f/16517288.jpg?width=660&height=495"),
("Colorado", "Chevy", 2009, 85454, "Truck", "Red", 11450, "https://invimg.autofunds.com/InventoryImages/2019/06/13/3752_1476592_42419972_10163813162019_90.jpg");

SELECT * FROM cars;