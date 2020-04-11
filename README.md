# react-todo-11th 모범답안

1. `atoms, molecules`로 자주 쓰는, 작은 단위의 component들을 분리했습니다.
2. todo와 관련된 컴포넌트들은 todo 디렉토리에 분리했습니다.
3. `React.memo`로 리렌더링 최적화를 적용했습니다.
4. `handleComplete` 함수에서 2중첩 화살표 함수를 사용했습니다.
5. `handleFormChange, isValidForm, initForm`등 기능별로 함수를 분리했습니다. 또 위 함수들은 `input component` 내부에서 정의해 캡슐화시켰습니다.
6. `TodoItem`의 `key`로 `JSON.stringify(item)`을 넘겼습니다. 별도의 id값이 없을 때 유용한 방법입니다.
