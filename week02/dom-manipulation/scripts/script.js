const selector = sel => document.querySelector(sel);

const input = selector('#favchap');
const button = selector('button');
const list = selector('#list');

selector('button').addEventListener('click', (e) => {
    e.preventDefault();
    input.focus();

    if (input.value.trim() === '') return ;

    const li = document.createElement('li');
    li.textContent = input.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
    });

    li.append(deleteButton);
    list.append(li);

    input.value = '';
});
