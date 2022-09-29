@@ -1 +1,79 @@
<h2>React Js에 대해 배운 걸 기록하는 곳</h2>
<h3>React란?</h3>
React는 웹 프레임 워크로, 자바스크립트 라이브러리의 하나로서
사용자 인터페이스를 만들기 위해 사용된다. -위키백과-

React는 Facebook에서 제공해주는 프론트 엔드 라이브러리다.
싱글 페이지 애플리케이션이나 모바일 애플리케이션의 개발 시
토대로 사용가능

현재 많이 활용되고 있는, 웹/앱의 View를 개발할 수 있도록 하는
인기 있는 라이브러리라고 정의할 수 있다.

<h3>필요성</h3>
React를 사용하지 않아도, Html, Css, Javascript를 사용하여
웹 페이지를 만들 수 있지만, React를 사용하면
사용자와 상호작용할 수 있는 동적인 UI를 쉽게 만들 수 있다.

<h3>특징</h3>
React의 특징을 크게 다음과 같이 구분가능하다.
1. Data Flow
2. Component 기반 구조
3. Virtual Dom
4. Props and State
5. JSX

<h4>1. Data Flow</h4>
React는 데이터의 흐름이 한 방향으로 흐르는 단방향 데이터 흐름으로 이루어져 있다.
Augular.js와 같은 양바향 데이터 바인딩은 규모가 커지면,
데이터의 흐름을 추적하기 힘들고 보잡해지는 경향이 있어,
복잡한 앱에서도 데이터 흐름에서 일어나는 변화를 보다
쉽게 예측이 가능할 수 있더록 단방향 흐름을 가지도록 함

<h4>2. Component 기반 구조</h4>
Component는 독립적인 단위의 소프트웨어 모듈인데,
소프트웨어를 독립적인 하나의 부품으로 만드는 방법이다.
React는 UI를 여러 Component를 쪼개서 만듭니다.
한 페이지 안에서도 여러 각부분을 독립된 Component로 만들고,
이 Component를 조립해 화면을 구성한다.
Component 단위로 쪼개져 있기 때문에, 전체 코드를 상대적으로
파악하기 매우 쉬운 난이도를 가진다. 
이렇게 기능 단위, UI단위로 캡슐화시켜 코드를 관리하여 재사용성이 높다.
이로 인해 코드는 반복해 입력할 필요 없이, 컴포넌트만 import 하면 된다.
애플리케이션이 복잡해져도 코드의 유지보수와 관리가 용이해진다.

<h4>3. Virtual DOM</h4>
먼저, DOM은 Document Objext Model의 약자이다.
DOM은 Html, Xml, Css 등을 트리 구조로 인식한 후,
데이터를 객체로 간주하고 관리 한다.
React는 이 DOM Tree 구조와 같은 구조체를 Virtual DOM으로 가진다.
이벤트가 발생할 때 마다 Virtual DOM을 만들고, 다시 그릴 때 마다
실제 DOM와 전후 상태를 비교해, 변경이 필요한 최소한의 변경사항만 반영해,
앱의 효율성과 속도를 개선할 수 있다.

<h4>4. Props and State</h4>
Props : 부모 Component에서 자식 Component로 전달해 주는 데이터이다.
쉽게 생각하자면 읽기 전용 데이터라고 생각하면 편하다.
자식 Component에서 전달 받은 Props는 변경이 불가하고
Props를 전달해준 최상위 부모 컴포넌트만 Props를 변경할 수 있다.

State : Component 안에서 선언하고 안에서 값을 변경할 수 있습니다.
이는 동적인 데이터를 다룰 때 사용하며, 사용자와의 상호작용을 통해
데이터를 동적으로 변경할 때 사용한다. 클래스형 컴포넌트에서만 사용이 가능.
각각의 State는 독립적이라 서로 간섭이 불가하다.

<h4>5. JSX</h4>
React에서 이는 필수가 아니지만, React에서 사용되기에 공식문서의 설명문을 정리 했습니다.
EX) const element = h1Hello, World!/h1;
<h5>JSX :</h5>
Javascript를 확장한 문법이다.
React에서는 이벤트가 처리되는 방식과 시간에 따라서 State가 변하는 방식,
화면에 표시하기위한 데이터가 준비되는 방식 등 렌더링 로직이 
본질적으로 다른 UI로직과 연결된다.
React는 별도의 파일에 MarkUp과 로직을 첨부해 기술을 인위적으로 분리하되,
둘 다 포함하는 "Component"라고 불리는 느슨하게 연결된 Unit으로 관심사를 분리한다.
이후 Section에서 다시 Component로 돌아오지만, JS에서 MarkUp을 넣는 것이
익숙치 않다면 이 이야기 확신을 줄 것이다.
React는 JSX 사용이 필수가 아니지만, 대부분의 사람은 JS코드 안에서
UI관련 작업을 할 때 시각적으로 더 도움을 준다고 생각합니다.
또한 React가 더욱 도움이 되는 에러 및 경고메시지를 표시할 수 있게 한다.
