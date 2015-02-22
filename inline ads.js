var images = [], 
index = 0;

images[0] = "<a href = 'http://dl.flipkart.com/dl/essentials-medical-pharmacology-english-7th/p/itmdmpfrhwazhfag?pid=9789350259375&affid=acrosspgya'>Essentials of Medical Pharmacology-7th Edition by KD Tripathi</a>";
images[1] = "<a href = 'http://fkrt.it/NLsB6LNN'>LMR LAST MINUTE REVISION SERIES FOR NBE/AIPGMEE/FMGE - Latest Edition</a>";
images[2] = "<a href = 'http://fkrt.it/u2YhlrNN'>Buy Platinum Notes - Preclinical Sciences Volume 1 (2014 - 15) 4th Edition</a>";


index = Math.floor(Math.random() * images.length);
document.write(images[index]);