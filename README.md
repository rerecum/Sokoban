# Sokoban
## Wstęp
Sokoban to gra logiczna, w której gracz przenosi pudełka do miejsc ich przechowywania. Gra toczy się na planszy, a gracz może poruszać się w czterech kierunkach - w lewo, w prawo, w górę i w dół. Gracz może pchać pudełka, ale nie może ich ciągnąć. Celem gry jest przeniesienie wszystkich pudeł do wyznaczonych miejsc przechowywania.

## Składniki
Gra składa się z trzech elementów:

### GameBoard:
Ten komponent jest odpowiedzialny za renderowanie planszy i obsługę danych wprowadzanych przez gracza.
### LevelSelector:
Ten komponent wyświetla listę poziomów, na których gracz może grać.
### Game:
ten komponent jest głównym komponentem, który zarządza stanem gry i renderuje pozostałe dwa komponenty.

## Struktura gry
Gra wykorzystuje następujące struktury danych:

### LEVELS:
Jest to tablica reprezentujących poziomy w grze. Każdy poziom jest reprezentowany przez dwuwymiarową tablicę, w której każda komórka reprezentuje inny typ obiektu w grze (np. ścianę, skrzynię lub pustą przestrzeń).
### COLOR:
Jest to tablica kolorów, która odpowiada różnym typom obiektów w grze.
### ITEM:
Jest to obiekt, który odwzorowuje różne typy obiektów w grze na wartości całkowite.
### GAME_STATE:
Jest to obiekt, który definiuje dwa możliwe stany gry – „RUNNING” i „DONE”.
### ACTION:
Jest to obiekt, który definiuje trzy możliwe akcje, które gracz może wykonać – „MOVE”, „RESTART_LEVEL” i „PLAY_NEXT_LEVEL”.
### DIRECTION:
Jest to obiekt, który odwzorowuje klawisze strzałek na wartości całkowite.

## Funkcje
Gra wykorzystuje następujące funkcje:

### getInitialState:
Ta funkcja pobiera numer poziomu jako dane wejściowe i zwraca początkowy stan gry. Funkcja analizuje tablicę poziomów w celu utworzenia początkowego stanu planszy i zwraca ten stan jako obiekt.
### move: 
Ta funkcja pobiera bieżący stan gry i kierunek jako dane wejściowe i zwraca zaktualizowany stan gry po tym, jak gracz wykona ruch w określonym kierunku.
### playNextLevel:
Ta funkcja przyjmuje bieżący stan gry jako dane wejściowe i zwraca zaktualizowany stan gry po ukończeniu przez gracza poziomu.
### reducer:
Ta funkcja przyjmuje bieżący stan gry i akcję jako dane wejściowe i zwraca zaktualizowany stan gry po wykonaniu akcji. Funkcja używa instrukcji switch do określenia akcji do wykonania.