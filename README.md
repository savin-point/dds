# DDS - Daekyo Design System

대교의 디지털 제품을 위한 React 컴포넌트 라이브러리입니다.

## 설치

```bash
npm install @daekyo/dds
# or
yarn add @daekyo/dds
```

## 사용법

### 컴포넌트 사용

```tsx
import { Button } from '@daekyo/dds';

function App() {
  return (
    <Button variant="filled" color="accent" size="medium">
      버튼
    </Button>
  );
}
```

### 디자인 토큰 사용

```tsx
import { semanticColors, typography, spacing } from '@daekyo/dds';

const styles = {
  color: semanticColors.text.primary,
  backgroundColor: semanticColors.background.default,
};
```

## 컴포넌트

### Button

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'large' \| 'medium' \| 'small' \| 'xsmall'` | `'medium'` | 버튼 크기 |
| `variant` | `'filled' \| 'outlined' \| 'ghost'` | `'filled'` | 버튼 스타일 |
| `color` | `'accent' \| 'brand' \| 'neutral' \| 'positive' \| 'negative' \| 'caution'` | `'accent'` | 버튼 색상 |
| `fullWidth` | `boolean` | `false` | 전체 너비 사용 |
| `iconOnly` | `boolean` | `false` | 아이콘만 있는 버튼 |
| `leftIcon` | `ReactNode` | - | 왼쪽 아이콘 |
| `rightIcon` | `ReactNode` | - | 오른쪽 아이콘 |
| `loading` | `boolean` | `false` | 로딩 상태 |
| `disabled` | `boolean` | `false` | 비활성화 상태 |

## 디자인 토큰

### Colors

- **Core Colors**: 기본 색상 팔레트
- **Scale Colors**: 채도/명도 조정된 색상
- **Semantic Colors**: 용도별 색상 (background, text, border, icon)

### Typography

- Display, Header, Title, Body, Label 계층
- 각 계층별 large, medium, small 크기
- default, bold, light weight 지원

### Spacing

- 반응형 spacing (PC, Tablet, Mobile)
- Border radius, Border width

## Figma

[DDS - Daekyo Design System](https://www.figma.com/design/1SskE79en5eBiobCKgPOoj/-DDS--Daekyo-Design-System)

## License

MIT
