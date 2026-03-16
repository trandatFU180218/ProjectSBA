SELECT TOP (1000) [id]
      ,[title]
      ,[author]
      ,[publisher]
      ,[publish_year]
      ,[ISBN]
      ,[category_id]
      ,[description]
      ,[image_url]
      ,[created_at]
  FROM [library_management].[dbo].[Books]
  /**/
  INSERT INTO Categories (name, description)
VALUES
('Children Fables', 'Fables and moral stories for children'),
('Science Fiction', 'Books about futuristic science and technology'),
('Adventure', 'Adventure and exploration stories'),
('Self Help', 'Personal development and motivation books'),
('Economics', 'Books about economy, finance and business');
/*ngu ngon*/
INSERT INTO Books (title,author,publisher,publish_year,ISBN,category_id,description,image_url)
VALUES
('The Fox and the Grapes','Aesop','Classic House',2000,'1111111111',1,'A famous fable about patience and wisdom','https://m.media-amazon.com/images/I/71PLcT9yN-L._AC_UF1000,1000_QL80_.jpg'),
('The Lion and the Mouse','Aesop','Classic House',2001,'1111111112',1,'Kindness can bring unexpected rewards','https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9780735821293/the-lion-and-the-mouse-9780735821293_hr.jpg'),
('The Tortoise and the Hare','Aesop','Classic House',2002,'1111111113',1,'Slow and steady wins the race','https://m.media-amazon.com/images/I/519PZ8S4YTL._AC_UF1000,1000_QL80_.jpg'),
('The Boy Who Cried Wolf','Aesop','Classic House',2003,'1111111114',1,'A story about honesty','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbFzJ-UeYHg0L6-ugrR2ySc4_e9iKhj02XaQ&s'),
('The Ant and the Grasshopper','Aesop','Classic House',2004,'1111111115',1,'Hard work and preparation matter','https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1591253697i/46205465.jpg'),
('The Golden Goose','Brothers Grimm','Fairy Tale Press',2005,'1111111116',1,'A magical goose brings fortune','https://m.media-amazon.com/images/I/81Ncu8d2wjL._AC_UF1000,1000_QL80_.jpg'),
('The Ugly Duckling','Hans Christian Andersen','Kids Books',2006,'1111111117',1,'A story about transformation','https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9780735821460/ugly-duckling-9780735821460_hr.jpg'),
('The Little Match Girl','Hans Christian Andersen','Kids Books',2007,'1111111118',1,'A touching winter story','https://upload.wikimedia.org/wikipedia/en/7/73/The_Little_Match_Girl_%28Pinkney_book%29.jpg'),
('The Emperor''s New Clothes','Hans Christian Andersen','Kids Books',2008,'1111111119',1,'A lesson about vanity','https://cdn.kobo.com/book-images/706ca970-121e-4515-8bd5-859258f72e77/1200/1200/False/the-emperor-s-new-clothes-usborne-young-reading-series-one.jpg'),
('Pinocchio','Carlo Collodi','Children Press',2009,'1111111120',1,'A wooden puppet learns life lessons','https://cdn.kobo.com/book-images/84d001e3-4142-40ad-987d-84a8d644dda4/1200/1200/False/the-adventures-of-pinocchio-116.jpg');

/*khoa hoc vien tuong*/
INSERT INTO Books (title,author,publisher,publish_year,ISBN,category_id,description,image_url)
VALUES
('Dune','Frank Herbert','Ace Books',1965,'2222222221',7,'Epic sci-fi story about desert planet Arrakis','https://product.hstatic.net/200000896417/product/26cdf0aeb74e4e78a295bb067c128902_bb8d201aaca84ce4b22c17a582739f00_master.jpg'),
('Foundation','Isaac Asimov','Spectra',1951,'2222222222',7,'A saga about the fall of galactic empire','https://m.media-amazon.com/images/I/81LT+V9G4IL._AC_UF894,1000_QL80_.jpg'),
('Neuromancer','William Gibson','Ace Books',1984,'2222222223',7,'Cyberpunk classic about hackers','https://m.media-amazon.com/images/I/81mcCWmIRkL._AC_UF1000,1000_QL80_.jpg'),
('Ender''s Game','Orson Scott Card','Tor Books',1985,'2222222224',7,'A child genius trained to fight aliens','https://img2.od-cdn.com/ImageType-100/2390-1/%7BB9A5B9EF-DC59-4A03-9AF4-F88385D3E3AF%7DImg100.jpg'),
('The Martian','Andy Weir','Crown Publishing',2011,'2222222225',7,'An astronaut survives on Mars','https://img1.od-cdn.com/ImageType-400/0111-1/82E/F8E/C3/%7B82EF8EC3-386B-4561-8F65-2D59433B9358%7DImg400.jpg'),
('Snow Crash','Neal Stephenson','Bantam Books',1992,'2222222226',7,'Virtual reality and cyber world','https://m.media-amazon.com/images/I/81p4Y+0HzbL.jpg'),
('Ready Player One','Ernest Cline','Crown Publishing',2011,'2222222227',7,'A virtual treasure hunt in the OASIS','https://m.media-amazon.com/images/I/91Lyl4yvpbL._AC_UF1000,1000_QL80_.jpg'),
('Hyperion','Dan Simmons','Doubleday',1989,'2222222228',7,'Pilgrims journey across space','https://m.media-amazon.com/images/I/81i2XR+FDfL._AC_UF1000,1000_QL80_.jpg'),
('The Time Machine','H. G. Wells','Penguin',1895,'2222222229',7,'A scientist travels through time','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWYzZF5SSToCI3juDJQUtCbXO5FjjwI_Wnw&s'),
('Do Androids Dream of Electric Sheep?','Philip K. Dick','Doubleday',1968,'2222222230',7,'Story about androids and humanity','https://upload.wikimedia.org/wikipedia/commons/e/ee/DoAndroidsDream.png');
/*phieu luu*/
INSERT INTO Books (title,author,publisher,publish_year,ISBN,category_id,description,image_url)
VALUES
('Treasure Island','Robert Louis Stevenson','Penguin',1883,'3333333331',8,'Pirates and hidden treasure adventure','https://m.media-amazon.com/images/I/71lDKRk1FXL._AC_UF1000,1000_QL80_.jpg'),
('Journey to the Center of the Earth','Jules Verne','Penguin',1864,'3333333332',8,'A journey deep beneath the Earth','https://m.media-amazon.com/images/I/81-K7SbCyLL._AC_UF1000,1000_QL80_.jpg'),
('Around the World in 80 Days','Jules Verne','Penguin',1873,'3333333333',8,'A race around the world','https://m.media-amazon.com/images/I/81M2n5ulFjL._AC_UF1000,1000_QL80_.jpg'),
('The Three Musketeers','Alexandre Dumas','Penguin',1844,'3333333334',8,'Sword fights and royal intrigue','https://m.media-amazon.com/images/I/6126N4kk9jL._UF1000,1000_QL80_.jpg'),
('Robinson Crusoe','Daniel Defoe','Penguin',1719,'3333333335',8,'A man stranded on a deserted island','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-aaTx1MItWLqMLpKRhVzST8-HxNWlEJOzQ&s'),
('King Solomon''s Mines','H. Rider Haggard','Penguin',1885,'3333333336',8,'Treasure hunting in Africa','https://cdn.kobo.com/book-images/854c6475-fc25-43bb-a304-6d1f0d4e91aa/1200/1200/False/king-solomon-s-mines-125.jpg'),
('The Call of the Wild','Jack London','Macmillan',1903,'3333333337',8,'A dog survives harsh wilderness','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTVCezJcJJmL3-1FL24cGWWLlQP1EMvEhjEg&s'),
('The Lost World','Arthur Conan Doyle','Penguin',1912,'3333333338',8,'Dinosaurs discovered in jungle','https://m.media-amazon.com/images/I/61ALyn5SZgL._AC_UF1000,1000_QL80_.jpg'),
('Into the Wild','Jon Krakauer','Anchor Books',1996,'3333333339',8,'True adventure in Alaska','https://m.media-amazon.com/images/I/81tzT4o5egL._AC_UF1000,1000_QL80_.jpg'),
('Life of Pi','Yann Martel','Knopf',2001,'3333333340',8,'A boy survives on a lifeboat with a tiger','https://m.media-amazon.com/images/I/517MEVV026L._AC_UF1000,1000_QL80_.jpg');

/*sèlf help*/
INSERT INTO Books (title,author,publisher,publish_year,ISBN,category_id,description,image_url)
VALUES
('Atomic Habits','James Clear','Avery',2018,'4444444441',9,'Build good habits and break bad ones','https://imgv2-1-f.scribdassets.com/img/word_document/769193732/original/11fff500ad/1?v=1'),
('The 7 Habits of Highly Effective People','Stephen Covey','Free Press',1989,'4444444442',9,'Personal development classic','https://m.media-amazon.com/images/I/71rmHeQeuRL._AC_UF1000,1000_QL80_.jpg'),
('Think and Grow Rich','Napoleon Hill','Success Books',1937,'4444444443',9,'Principles of financial success','https://cdn1.fahasa.com/media/catalog/product/5/1/51dxwcr9fjl.jpg'),
('How to Win Friends and Influence People','Dale Carnegie','Simon & Schuster',1936,'4444444444',9,'Improve communication skills','https://m.media-amazon.com/images/I/71vK0WVQ4rL._AC_UF1000,1000_QL80_.jpg'),
('The Power of Now','Eckhart Tolle','New World Library',1997,'4444444445',9,'Living in the present moment','https://m.media-amazon.com/images/I/61Ij8nLooNL._AC_UF1000,1000_QL80_.jpg'),
('Rich Dad Poor Dad','Robert Kiyosaki','Warner Books',1997,'4444444446',9,'Financial mindset lessons','https://m.media-amazon.com/images/I/71W57+-AtnL._AC_UF1000,1000_QL80_.jpg'),
('Start With Why','Simon Sinek','Portfolio',2009,'4444444447',9,'Leadership and motivation','https://m.media-amazon.com/images/I/71NBZIExBCL._AC_UF1000,1000_QL80_.jpg'),
('Deep Work','Cal Newport','Grand Central',2016,'4444444448',9,'Focus and productivity skills','https://m.media-amazon.com/images/I/71din4TLubL._UF1000,1000_QL80_.jpg'),
('The Subtle Art of Not Giving a F*ck','Mark Manson','Harper',2016,'4444444449',9,'Counterintuitive life advice','https://cdn1.fahasa.com/media/catalog/product/1/_/1_67_1.jpg'),
('Grit','Angela Duckworth','Scribner',2016,'4444444450',9,'Power of perseverance','https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1632024090i/27213329.jpg');

/*kinh te*/

INSERT INTO Books (title,author,publisher,publish_year,ISBN,category_id,description,image_url)
VALUES
('Capital in the Twenty-First Century','Thomas Piketty','Harvard Press',2013,'5555555551',5,'Analysis of wealth inequality','https://m.media-amazon.com/images/I/51zRDR7qEyL._AC_UF1000,1000_QL80_.jpg'),
('Freakonomics','Steven Levitt','HarperCollins',2005,'5555555552',5,'Economics of everyday life','https://img.perlego.com/book-covers/589324/9780062132345_300_450.webp'),
('The Wealth of Nations','Adam Smith','Penguin',1776,'5555555553',5,'Foundation of modern economics','https://cdn.kobo.com/book-images/164af17b-6987-4165-bfbf-b37c7e84276e/1200/1200/False/the-wealth-of-nations-illustrated-2.jpg'),
('The Intelligent Investor','Benjamin Graham','Harper',1949,'5555555554',5,'Classic investing guide','https://img.perlego.com/book-covers/596158/9780061745171_300_450.webp'),
('Principles of Economics','Gregory Mankiw','Cengage',1997,'5555555555',5,'Basic economic principles','https://media.springernature.com/full/springer-static/cover-hires/book/978-1-137-37526-1'),
('Poor Economics','Abhijit Banerjee','PublicAffairs',2011,'5555555556',5,'Rethinking global poverty','https://bizweb.dktcdn.net/thumb/1024x1024/100/364/248/products/61jfottfzgl-sl1400.jpg?v=1733246607820'),
('Misbehaving','Richard Thaler','W. W. Norton',2015,'5555555557',5,'Behavioral economics explained','https://m.media-amazon.com/images/I/61i0xvfc6fL._AC_UF1000,1000_QL80_.jpg'),
('Nudge','Richard Thaler','Penguin',2008,'5555555558',5,'How decisions are influenced','https://m.media-amazon.com/images/I/71y7r6LdWtL._AC_UF1000,1000_QL80_.jpg'),
('The Big Short','Michael Lewis','W. W. Norton',2010,'5555555559',5,'Story of financial crisis','https://m.media-amazon.com/images/I/41bHaJ00D+L._UF1000,1000_QL80_.jpg'),
('Economics in One Lesson','Henry Hazlitt','Crown Publishing',1946,'5555555560',5,'Simple explanation of economics','https://m.media-amazon.com/images/I/717uFJhsjxL.jpg');
