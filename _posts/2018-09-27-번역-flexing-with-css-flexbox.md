---
layout: post
title: "[번역]Flexing with CSS Flexbox"
date: 2018-09-27 23:58 +0900
---

[NHNEnt. FE Weekly](https://github.com/nhnent/fe.javascript/wiki/FE-Weekly)에 작성했던 번역글 - Flexbox tutorial

# Flexing with CSS Flexbox

> 원문: [https://blog.logrocket.com/flexing-with-css-flexbox-b7940b329a8a](https://blog.logrocket.com/flexing-with-css-flexbox-b7940b329a8a){:target="_blank"}

플렉스 박스(Flexbox)라 하는 유연한 박스(flexible box)는 반응형 레이아웃을 매우 쉽게 만들 수 있도록 하는 CSS의 레이아웃 모델 유형이다.

플렉스 박스 레이아웃 모델의 전반적인 아이디어는 구성요소들을 어떤 방향으로 배치할지 지정하고, 각각의 크기를 유연하게 늘리거나 줄여서 부모 요소의 영역을 가로, 세로로 넘치지 않도록 하는 것이다.

이런 플렉스 박스의 유연성을 발휘하려면 플렉스 박스가 어떤 방식으로 동작하는지 이해해야 한다. 먼저 플렉스 박스는 다음 두 가지로 나누어 생각하자.

1. Flex Container
2. Flex Items

<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Flex Container

플렉스 컨테이너는 실제로 배치하고 싶은 아이템들을 가지고 있는 부모 엘리먼트다. 플렉스 속성을 사용하려면, 이 컨테이너가 먼저 있어야 한다. 다른 모든 플렉스 속성들이 동작하도록 컨텍스트를 만드는 것이다.

<p data-height="265" data-theme-id="light" data-slug-hash="NMJEMy" data-default-tab="result" data-user="c0depanda" data-pen-title="Flex 1" class="codepen">See the Pen <a href="https://codepen.io/c0depanda/pen/NMJEMy/">Flex 1</a> by Obaseki Nosa (<a href="https://codepen.io/c0depanda">@c0depanda</a>) on <a href="https://codepen.io">CodePen</a>.</p>

### align-items

이 속성은 플렉스 컨테이너 내부에서 플렉스 컨테이너나 각 아이템의 높이에 관계없이 아이템들을 세로로 정렬할 수 있게 한다.

허용 값: `flex-start`, `flex-end`, `center`, `baseline`, `stretch`

<p data-height="265" data-theme-id="light" data-slug-hash="NMJeXJ" data-default-tab="result" data-user="c0depanda" data-pen-title="Flex - align-items" class="codepen">See the Pen <a href="https://codepen.io/c0depanda/pen/NMJeXJ/">Flex - align-items</a> by Obaseki Nosa (<a href="https://codepen.io/c0depanda">@c0depanda</a>) on <a href="https://codepen.io">CodePen</a>.</p>

### justify-content

`align-items`의 반대다. 플렉스 컨테이너나 각 아이템의 너비에 관계없이, 아이템들을 가로로 정렬한다.

허용 값: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`

<p data-height="265" data-theme-id="light" data-slug-hash="MXJdvq" data-default-tab="result" data-user="c0depanda" data-pen-title="justify content" class="codepen">See the Pen <a href="https://codepen.io/c0depanda/pen/MXJdvq/">justify content</a> by Obaseki Nosa (<a href="https://codepen.io/c0depanda">@c0depanda</a>) on <a href="https://codepen.io">CodePen</a>.</p>

### flex-wrap

플렉스 아이템들이 다음 줄로 나눌지 여부를 지정한다. 기본적으로 모든 플렉스 아이템들은 한 줄에 맞추게 되어있지만, 이 속성은 한 줄에 너무 많은 아이템이 있는 경우 다음 줄로 구분하도록 브라우저에 지시한다. 여기서 말하는 한 줄(line)은 플렉스 라인(Flex line)이라고도 한다.

허용 값: `nowrap`, `wrap`, `wrap-reverse`

<p data-height="265" data-theme-id="light" data-slug-hash="LrxopK" data-default-tab="result" data-user="c0depanda" data-pen-title="Flex Wrap" class="codepen">See the Pen <a href="https://codepen.io/c0depanda/pen/LrxopK/">Flex Wrap</a> by Obaseki Nosa (<a href="https://codepen.io/c0depanda">@c0depanda</a>) on <a href="https://codepen.io">CodePen</a>.</p>

### align-content

`flex-wrap`의 동작을 변경한다. 기본적으로는 `align-items`와 유사하게 동작하지만, 플렉스 아이템이 아닌 플렉스 라인을 정렬시킨다. 이 속성이 동작하기 위해선, `flex-wrap: wrap`이 먼저 플렉스 컨테이너에 지정되어야 하고, 플렉스 라인은 둘 이상이야 한다.

허용 값: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch`

<p data-height="265" data-theme-id="light" data-slug-hash="xzgNGB" data-default-tab="result" data-user="c0depanda" data-pen-title="align-content" class="codepen">See the Pen <a href="https://codepen.io/c0depanda/pen/xzgNGB/">align-content</a> by Obaseki Nosa (<a href="https://codepen.io/c0depanda">@c0depanda</a>) on <a href="https://codepen.io">CodePen</a>.</p>

### flex-direction

브라우저가 플렉스 아이템들을 어떻게 쌓을지 지정한다. (가로 / 세로)

허용 값: `row`, `row-reverse`, `column`, `column-reverse`

<p data-height="265" data-theme-id="light" data-slug-hash="wXgbrq" data-default-tab="result" data-user="c0depanda" data-pen-title="flex-direction" class="codepen">See the Pen <a href="https://codepen.io/c0depanda/pen/wXgbrq/">flex-direction</a> by Obaseki Nosa (<a href="https://codepen.io/c0depanda">@c0depanda</a>) on <a href="https://codepen.io">CodePen</a>.</p>


> 역주) 플렉스 아이템의 정렬은 플렉스 컨테이너의 방향을 기준으로 한다. 컨테이너의 방향이 바뀌는 경우(ex - `flow-direction: column`)는 `align-items`와 `justify-content`의 동작도 함께 변한다.
>   - 참고: [MDN - Aligning Items in a Flex Container - Changing the main axis](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container#Changing_the_main_axis)

<br>
### flex-flow

`flex-direction`과 `flex-wrap`를 합쳐서 `flex-flow`로 표현할 수 있다(shorthand).

```css
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
```

위 표현은 아래와 같다.

```css
.container {
  display: flex;
  flex-flow: column wrap;
}
```

## Flex Items

플렉스 아이템은 플렉스 컨테이너의 자식 엘리먼트로, 플렉스 컨테이너와 마찬가지로 적용할 수 있는 속성들이 있다.

### orders

이 속성은 플렉스 아이템들을 정렬할 때 그 순서를 변경할 수 있도록 한다. 같은 컨테이너에 있는 아이템들을 경우 이 값에 따라 오름차순으로 배치한다.

허용 값: \<integers> (양 / 음수)

<p data-height="265" data-theme-id="light" data-slug-hash="XYMdow" data-default-tab="result" data-user="c0depanda" data-pen-title="Order" class="codepen">See the Pen <a href="https://codepen.io/c0depanda/pen/XYMdow/">Order</a> by Obaseki Nosa (<a href="https://codepen.io/c0depanda">@c0depanda</a>) on <a href="https://codepen.io">CodePen</a>.</p>

### align-self

이름에서 의미하듯 해당 플렉스 아이템의 수직 정렬 방식을 지정한다. 기본적으로 `align-items`와 같은 방식으로 동작하지만, 개별 플렉스 아이템에만 적용된다. 플렉스 컨테이너의 전체 아이템이 아닌 하나의 플렉스 아이템만 정렬을 따로 지정하고 싶을 때 유용하다.

Note: 플렉스 컨테이너의 `align-itmes` 속성을 오버라이드 한다.

허용 값: `auto`, `flex-start`, `flex-end`, `center`, `baseline`, `stretch`

<p data-height="265" data-theme-id="light" data-slug-hash="pKeERb" data-default-tab="result" data-user="c0depanda" data-pen-title="align-self" class="codepen">See the Pen <a href="https://codepen.io/c0depanda/pen/pKeERb/">align-self</a> by Obaseki Nosa (<a href="https://codepen.io/c0depanda">@c0depanda</a>) on <a href="https://codepen.io">CodePen</a>.</p>

### flex-basis

이 속성은 해당 플렉스 아이템의 초기 크기를 지정한다. `width` 속성과 유사하게 동작한다.

이 속성은 `px`, `em`, `rem`, 퍼센트 등의 [length-unit](https://www.w3schools.com/cssref/css_units.asp) 값을 허용한다. 그리고 `auto` 값은 `flex-grow`나 플렉스 아이템의 콘텐츠에 따라 자동으로 크기를 지정한다.

<p data-height="265" data-theme-id="light" data-slug-hash="LrWRJX" data-default-tab="result" data-user="c0depanda" data-pen-title="flex-basis" class="codepen">See the Pen <a href="https://codepen.io/c0depanda/pen/LrWRJX/">flex-basis</a> by Obaseki Nosa (<a href="https://codepen.io/c0depanda">@c0depanda</a>) on <a href="https://codepen.io">CodePen</a>.</p>

### flex-grow

플렉스 아이템의 마법과도 같은 속성으로, 플렉스 컨테이너의 빈 공간을 채우거나 다른 요소보다 더 많은 공간을 차지할 수 있다. 기본적으로 플렉스 컨테이너의 내부 공간을 어떻게 차지할지를 지정한다.

허용 값: \<integers> (양수)

<p data-height="265" data-theme-id="light" data-slug-hash="qKrRbN" data-default-tab="result" data-user="c0depanda" data-pen-title="flex-grow" class="codepen">See the Pen <a href="https://codepen.io/c0depanda/pen/qKrRbN/">flex-grow</a> by Obaseki Nosa (<a href="https://codepen.io/c0depanda">@c0depanda</a>) on <a href="https://codepen.io">CodePen</a>.</p>

> 역주) Codepen의 p 태그에 Flex Shrink라고 잘못 쓰여있다. Flex-grow가 맞다.

### flex-shrink

기본적으로 플렉스 아이템이 필요에 따라 크기를 줄이도록 한다. `flex-grow`와 반대 동작이다. 값이 작을수록 더 많은 공간을 차지하려 한다.

허용 값: \<integers> (양수)

<p data-height="265" data-theme-id="light" data-slug-hash="zaZoZy" data-default-tab="result" data-user="c0depanda" data-pen-title="flex-shrink" class="codepen">See the Pen <a href="https://codepen.io/c0depanda/pen/zaZoZy/">flex-shrink</a> by Obaseki Nosa (<a href="https://codepen.io/c0depanda">@c0depanda</a>) on <a href="https://codepen.io">CodePen</a>.</p>

위의 예시에서, 5개 플렉스 아이템은 각 `flex-basis: 200px`로 총 1000px의 크기를 갖는다. 반면 플렉스 컨테이너는 400px로 지정되어 총 아이템들의 크기인 1000px보다 작다. 하지만 `flex-wrap`의 기본값이 `no-wrap`으로, 모든 아이템을 플렉스 컨테이너의 한 라인에 균등하게 너비를 나누어 배치한다.

`flex-shrink` 값을 아이템들에 지정하면, 그 값에 따라 아이템의 크기를 조정한다. `flex-shrink` 값이 클수록 다른 플렉스 아이템들과 비교하여 그 크기를 축소한다.

### flex

`flex-grow`, `flex-shrink`, `flex-basis`를 같이 나타내는 줄임 표현(shorthand)이다. 단, `flex-shrink`와 `flex-basis`는 선택적이다. `flex-grow`에 해당하는 값만 지정해도 나머지 값들은 기본값으로 설정한다.

기본적으로 설정하는 값은 `flex: 0 1 auto`다. 이는 `flex-grow: 0`, `flex-shrink: 1`, `flex-basis: auto`와 같다.
