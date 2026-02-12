const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
    console.log("--- Список (цикл) ---")
    let tmp = list;
    while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}

function printListRec(list) {
  if (!list) return;

  console.log(list.value);
  printListRec(list.next);
}

function printReverseListRec(list) {
  if (list.prev) {
    printReverseListRec(list.next);
  }
  console.log(list.value);
}

function printReverseList(list) {
  console.log("--- Обернений список (цикл через масив) ---");
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printList(list);

console.log("--- Список (рекурсія) ---");
printListRec(list);

console.log("--- Обернений список (рекурсія) ---");
printReverseListRec(list);

printReverseList(list);