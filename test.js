#include <stdio.h> /* Стандартный заголовочный файл ввода-вывода */
#include <iostream> /* Библиотека (стандарт) */
#include <locale.h> /* Русификатор */
#include <windows.h> /* Русификатор */
using namespace std;

int main(int argc, char* argv[])
{
    setlocale(LC_CTYPE,"Russian");
    cout << "8  % 4  = " << 8 % 4  << endl; // выполнение операции "остаток от деления"
    cout << "7  % 4  = " << 7 % 4  << endl;
    cout << "2  % 4  = " << 2 % 4  << endl;
    cout << "43 % 10 = " << 43 % 10 << endl;
    system("pause");
    return 0;
}
