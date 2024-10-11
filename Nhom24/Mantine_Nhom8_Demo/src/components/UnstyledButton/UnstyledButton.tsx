import {
  Text,
  SimpleGrid,
  UnstyledButton,
  Overlay,
} from '@mantine/core';
import classes from './UnstyledButton.module.css';
const categories = [
  {
    label: 'Hỗ trợ khách hàng',
    image: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'Hướng dẫn sử dụng',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'Câu hỏi bán hàng',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
  },
];

export function UnstyledButtonModule() {
  const items = categories.map((category) => (
    <UnstyledButton
      style={{
        backgroundImage: `url(${category.image})`,
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative', // Thay thế style bằng sx
      }}
      key={category.label}
    >
      <Overlay color="#000" opacity={0.6} zIndex={1} />
      <Text
        size="xl"
        ta="center"
        fw={700}
        style={{ color: 'red', zIndex: 2 }} 
        className={classes.categories}
      >
        {category.label}
      </Text>
    </UnstyledButton>
  ));

  return (
    <SimpleGrid cols={{ base: 1, sm: 3 }}>{items}</SimpleGrid>
  );
}
