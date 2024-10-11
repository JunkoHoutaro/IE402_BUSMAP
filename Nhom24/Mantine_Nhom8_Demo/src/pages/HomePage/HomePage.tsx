import {
  MantineProvider,
  Container,
  SimpleGrid,
  Title,
  Text,
  Card,
  Image,
  Button,
  Group,
} from '@mantine/core';

export default function HomePage() {
  // Danh sách sản phẩm
  const products = [
    {
      title: 'Sản phẩm 1',
      description: 'Mô tả chi tiết về Sản phẩm 1.',
      imageUrl: 'https://via.placeholder.com/150',
      price: '$29.99', // Giá sản phẩm
      link: '/product1', // Đường dẫn đến trang sản phẩm
    },
    {
      title: 'Sản phẩm 2',
      description: 'Mô tả chi tiết về Sản phẩm 2.',
      imageUrl: 'https://via.placeholder.com/150',
      price: '$39.99',
      link: '/product2',
    },
    {
      title: 'Sản phẩm 3',
      description: 'Mô tả chi tiết về Sản phẩm 3.',
      imageUrl: 'https://via.placeholder.com/150',
      price: '$49.99',
      link: '/product3',
    },
    {
      title: 'Sản phẩm 4',
      description: 'Mô tả chi tiết về Sản phẩm 4.',
      imageUrl: 'https://via.placeholder.com/150',
      price: '$59.99',
      link: '/product4',
    },
    {
      title: 'Sản phẩm 5',
      description: 'Mô tả chi tiết về Sản phẩm 5.',
      imageUrl: 'https://via.placeholder.com/150',
      price: '$69.99',
      link: '/product5',
    },
    {
      title: 'Sản phẩm 6',
      description: 'Mô tả chi tiết về Sản phẩm 6.',
      imageUrl: 'https://via.placeholder.com/150',
      price: '$79.99',
      link: '/product6',
    },
  ];

  return (
    <MantineProvider>
      <Container>
        <Title ta="center" mt="lg" order={1}>
          Chào Mừng Đến Với Cửa Hàng Của Chúng Tôi
        </Title>

        <Text ta="center" mt="md" size="lg" color="dimmed">
          Khám phá những sản phẩm mới nhất và ưu đãi hấp dẫn.
        </Text>

        <SimpleGrid cols={3} spacing="lg" mt="xl">
          {products.map((product) => (
            <Card shadow="sm" padding="lg" radius="md" withBorder key={product.title}>
              <Card.Section>
                <Image src={product.imageUrl} alt={product.title} height={160} />
              </Card.Section>

              <Text w={500} size="lg" mt="md">{product.title}</Text>
              <Text size="sm" color="dimmed" mt="xs">{product.description}</Text>
              <Text size="lg" color="blue" mt="xs">{product.price}</Text> {/* Giá sản phẩm */}

              <Group mt="md">
                <Button
                  variant="light"
                  color="blue"
                  radius="md"
                  component="a"
                  href={product.link} // Chuyển hướng đến trang sản phẩm khi nhấn vào nút
                >
                  Mua ngay
                </Button>
              </Group>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </MantineProvider>
  );
}
