/*
* JAWABAN ESSAY SASBK MAPEL DPPLG
* ANGGATRA SATYA P.N. XPPLG1
*/

bil2 = Double.parseDouble(jTextField1.getText());
double hasil = 0;
        
switch (pilih) {
        case 1 -> {
                hasil = bil1 + bil2;
                break;
        } case 2 -> {
                hasil = bil1 - bil2;
                break;
        } case 3 -> {
                hasil = bil1 * bil2;
                break;
        } case 4 -> {
                hasil = bil1 / bil2;
                break;
        }
}
        
bil = "";
jTextField1.setText(String.valueOf(hasil));
