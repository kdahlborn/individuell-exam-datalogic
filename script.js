// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*
SET sum tilldelas INPUT från användare
SET friends tilldelas INPUT från användare
SET tipDecimal tilldelas INPUT från användare

SET tip till tipDecimal * sum
SET totalSum till tip + sum
SET splitPrice till totalSum / friends

Skriv ut "Varje person ska betala X kr"
*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*
SET dictionary = [FOUR, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE]; // Innehåller ALLA ord i det engelska språket
SET startWord till "FOUR"
SET endWord till "FIVE"
SET attempts till 0

WHILE startWord INTE är lika med endWord
    SET newWord tilldelas INPUT från användare

    IF längden på newWord INTE är lika med längden på endWord
        Meddela användare
    ELSE IF isOneLetterApart(startWord, newWord) är falskt
        Meddela användare
    ELSE IF isWordInDictionary(newWord, dictionary) är falskt
        Meddela användare
    ELSE
        Räkna upp attempts
        Meddela antal attempts
        SET startWord till newWord
    END IF
END WHILE

Skriv ut "Grattis! Du klarade pusslet på X antal försök"


FUNCTION isOneLetterApart(wordOne, wordTwo)
    SET diffCount till 0

    FOR varje tecken i wordOne, index räknas med 'i'
        IF plats 'i' i wordOne INTE är lika med 'i' i wordTwo
            Räkna upp diffCount
        END IF
    END FOR

    RETURN diffCount === 1 // returnerar sant om endast en bokstav ändrats, annars falskt
END FUNCTION

FUNCTION isWordInDictionary(word, dictionary)
    SET found till falskt
    
    FOR varje element i dictionary, index räknas med 'i'
        IF plats 'i' i dictionary är lika med word
            SET found till sant
        END IF
    END FOR
    
    RETURN found
END FUNCTION
*/
