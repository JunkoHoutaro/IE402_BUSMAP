// components/CardItem.tsx
import { Card, Image, Text, Button } from '@mantine/core';

interface CardItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

export function CardItem({ title, description, imageUrl }: CardItemProps) {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={imageUrl} alt={title} height={160} />
      </Card.Section>

      <Text fw={500} size="lg" mt="md">
        {title}
      </Text>

      <Text size="sm" color="dimmed" mt="xs">
        {description}
      </Text>

      <Button fullWidth mt="md" radius="md">
        Learn More
      </Button>
    </Card>
  );
}
