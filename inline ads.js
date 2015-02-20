var images = [], 
index = 0;

images[0] = "<a href = 'http://dl.flipkart.com/dl/essentials-medical-pharmacology-english-7th/p/itmdmpfrhwazhfag?pid=9789350259375&affid=acrosspgya'>Essentials of Medical Pharmacology-7th Edition by KD Tripathi</a>";
images[1] = "<a href = 'http://fkrt.it/NLsB6LNN'>LMR LAST MINUTE REVISION SERIES FOR NBE/AIPGMEE/FMGE - Latest Edition</a>";
images[2] = "<a href = 'http://fkrt.it/u2YhlrNN'>Buy Platinum Notes - Preclinical Sciences Volume 1 (2014 - 15) 4th Edition</a>";
images[3] = "<a href = 'http://www.flipkart.com/dnb-cet-review-primary-post-diploma-volume-1-4th/p/itmdvzg5p4ykm8sf?pid=9788189477219&affid=acrosspgya' target='_blank'><img src='https://lh6.googleusercontent.com/-7nDOIpr24aY/U20O3tGyY-I/AAAAAAAABb8/U4-Z_Yy13b4/s300/dnb%2520cet%2520review%25204th%2520ed%2520-%2520vol%25201.jpg'></a>";
images[4] = "<a href = 'http://www.flipkart.com/motorola/motox?affid=acrosspgya' target='_blank'><img src='https://lh5.googleusercontent.com/-KyC9M5mQ9zU/UytE4oife_I/AAAAAAAABXs/vAXltqaOHf0/s300/Moto-X-Flipkart.jpg' alt='Moto X'></a>";
images[5] = "<a href = 'http://www.flipkart.com/dnb-cet-review-primary-post-diploma-volume-2-fourth/p/itmdvuwzsswumgnt?pid=9788189477226&affid=acrosspgya' target='_blank'><img src='https://lh4.googleusercontent.com/-WRrVYp4LiT0/U20O4rNYjKI/AAAAAAAABcM/M8ix8sAEcD8/s300/dnb%2520cet%2520review%25204th%2520ed%2520-%2520vol%25202.jpg'></a>";
images[6] = "<a href = 'http://www.flipkart.com/dnb-cet-review-primary-post-diploma-volume-3-fourth/p/itmdvuwpfphrett4?pid=9788189477233&affid=acrosspgya' target='_blank'><img src='https://lh6.googleusercontent.com/-S7QEE1aBAIU/U20O4i6SxyI/AAAAAAAABcI/WT8MGz1Ki5A/s300/dnb%2520cet%2520review%25204th%2520ed%2520-%2520vol%25203.jpg'></a>";
images[7] = "<iframe src='http://www.flipkart.com/affiliate/displayWidget?affrid=WRID-138912334559088353' style='width:120px;height:240px;' scrolling='no' marginwidth='0' marginheight='0' frameborder='1' ></iframe>";
images[8] = "<a href = 'http://www.flipkart.com/motorola/motog?affid=acrosspgya' target='_blank'><img src='https://lh3.googleusercontent.com/-MTRyZz3Lwgc/UytE42Ms8lI/AAAAAAAABXw/J2ffyLIKFXo/s300/moto%2520g.jpg' alt='Moto G'></a>";
images[9] = "<iframe src='http://ws-in.amazon-adsystem.com/widgets/q?t=ac023-21&o=31&p=8&l=as1&asins=8189477218&ref=tf_til&fc1=000000&IS2=1&lt1=_blank&m=amazon&lc1=0000FF&bc1=000000&bg1=FFFFFF&f=ifr&MarketPlace=IN&ServiceVersion=20070822&WS=1&ID=8042_ProductLink&Operation=GetProductLink&'style='width:120px;height:240px;' scrolling='no' marginwidth='0' marginheight='0' frameborder='0'></iframe>";
images[10] = "<iframe src='http://ws-in.amazon-adsystem.com/widgets/q?t=ac023-21&o=31&p=8&l=as1&asins=8189477234&ref=tf_til&fc1=000000&IS2=1&lt1=_blank&m=amazon&lc1=0000FF&bc1=000000&bg1=FFFFFF&f=ifr&MarketPlace=IN&ServiceVersion=20070822&WS=1&ID=8042_ProductLink&Operation=GetProductLink&'style='width:120px;height:240px;' scrolling='no' marginwidth='0' marginheight='0' frameborder='0'></iframe>";

index = Math.floor(Math.random() * images.length);
document.write(images[index]);