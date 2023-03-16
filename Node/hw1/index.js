function kirilizacija(text) {


    let newText = []
    for (let i = 0; i < text.length; i++) {
        
        if (text[i]=='G' && text[i+1]=='j') {
            newText[i]='Ѓ';
            i++;
        }else if (text[i]=='g' && text[i+1]=='j') {
            newText[i]='ѓ';
            i++;
        }else if (text[i]=='N' && text[i+1]=='j') {
            newText[i]='Њ';
            i++;
        }else if (text[i]=='n' && text[i+1]=='j') {
            newText[i]='њ';
            i++;
        }else if (text[i]=='L' && text[i+1]=='j') {
            newText[i]='Љ';
            i++;
        }
        else if (text[i]=='l' && text[i+1]=='j') {
            newText[i]='љ';
            i++;
        }else if (text[i]=='N' && text[i+1]=='j') {
            newText[i]='Њ';
            i++;
        }else if (text[i]=='K' && text[i+1]=='j') {
            newText[i]='Ќ';
            i++;
        }else if (text[i]=='k' && text[i+1]=='j') {
            newText[i]='ќ';
            i++;
        }else if (text[i]=='D' && text[i+1]=='j') {
            newText[i]='Џ';
            i++;
        }else if (text[i]=='d' && text[i+1]=='j') {
            newText[i]='џ';
            i++;
        }else if (text[i]=='Z' && text[i+1]=='h') {
            newText[i]='Ж';
            i++;
        }else if (text[i]=='z' && text[i+1]=='h') {
            newText[i]='ж';
            i++;
        }else if (text[i]=='C' && text[i+1]=='h') {
            newText[i]='Ч';
            i++;
        }else if (text[i]=='c' && text[i+1]=='h') {
            newText[i]='ч';
            i++;
        }else if (text[i]=='S' && text[i+1]=='h') {
            newText[i]='Ш';
            i++;
        }else if (text[i]=='s' && text[i+1]=='h') {
            newText[i]='ш';
            i++;
        }else if (text[i]=='D' && text[i+1]=='z') {
            newText[i]='S';
            i++;
        }else if (text[i]=='d' && text[i+1]=='z') {
            newText[i]='ѕ';
            i++;
        }else{
        newText[i] = voKirilica(text[i])}
    }
    return newText.join('')
}


function voKirilica(lat) {
    switch (lat) {
        case 'A':
            return 'А';
        case 'B':
            return 'Б';
        case 'V':
            return 'В';
        case 'G':
            return 'Г';
        case 'D':
            return 'Д';
        case 'Gj':
            return 'Ѓ';
        case 'E':
            return 'Е';
        case 'Zh':
            return 'Ж';
        case 'Z':
            return 'З';
        case 'Dz':
            return 'S';
        case 'I':
            return 'И';
        case 'J':
            return 'Ј';
        case 'K':
            return 'К';
        case 'L':
            return 'Л';
        case 'Lj':
            return 'Љ';
        case 'M':
            return 'М';
        case 'N':
            return 'Н';
        case 'Nj':
            return 'Њ';
        case 'O':
            return 'О';
        case 'P':
            return 'П';
        case 'R':
            return 'Р';
        case 'S':
            return 'С';
        case 'T':
            return 'Т';
        case 'Kj':
            return 'Ќ';
        case 'U':
            return 'У';
        case 'F':
            return 'Ф';
        case 'H':
            return 'Х';
        case 'C':
            return 'Ц';
        case 'Ch':
            return 'Ч';
        case 'Dj':
            return 'Џ';
        case 'Sh':
            return 'Ш';
        case 'a':
            return 'а';
        case 'b':
            return 'б';
        case 'v':
            return 'в';
        case 'g':
            return 'г';
        case 'd':
            return 'д';
        case 'gj':
            return 'ѓ';
        case 'e':
            return 'е';
        case 'zh':
            return 'ж';
        case 'z':
            return 'з';
        case 'dz':
            return 'ѕ';
        case 'i':
            return 'и';
        case 'j':
            return 'ј';
        case 'k':
            return 'к';
        case 'l':
            return 'л';
        case 'lj':
            return 'љ';
        case 'm':
            return 'м';
        case 'n':
            return 'н';
        case 'nj':
            return 'њ';
        case 'o':
            return 'о';
        case 'p':
            return 'п';
        case 'r':
            return 'р';
        case 's':
            return 'с';
        case 't':
            return 'т';
        case 'kj':
            return 'ќ';
        case 'u':
            return 'у';
        case 'f':
            return 'ф';
        case 'h':
            return 'х';
        case 'c':
            return 'ц';
        case 'ch':
            return 'ч';
        case 'dj':
            return 'џ';
        case 'sh':
            return 'ш';
        default:
            return lat;
    }
}




console.log(kirilizacija('Aleksandar Ilijevski'))
console.log(kirilizacija('Gjoko Sashka Ljupka Dzunica Imenuvanje Djem'))