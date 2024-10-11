import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  UnstyledButton,
  Overlay,
} from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { ContactIconsList } from './ContactIcons';
import { useForm } from '@mantine/form';
import classes from './ContactUs.module.css';
import { UnstyledButtonModule } from '../../components/UnstyledButton/UnstyledButton'
import { FaqSimple } from '../../components/FQASimple/FaqSimple';
const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];
export function ContactUs() {
  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
      <Icon size="1.4rem" stroke={1.5} />
    </ActionIcon>
  ));
  const form = useForm({
    initialValues: { name: '', email: '', age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
    },
  });

  return (
    <>
      <div className={classes.wrapper}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
          <div>
            <Title className={classes.title}>Liên hệ</Title>
            <Text className={classes.description} mt="sm" mb={30} c={'white'}>
              Để lại email của bạn và chúng tôi sẽ liên hệ lại với bạn trong vòng 24 giờ
            </Text>

            <ContactIconsList />

            <Group mt="xl">{icons}</Group>
          </div>
          <div className={classes.form}>
          <form onSubmit={form.onSubmit(console.log)}>
            <TextInput
              label="Email"
              placeholder="Nhập email của bạn"
              {...form.getInputProps('email')}
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Tên"
              placeholder="Nhập tên của bạn"
              mt="md"
              {...form.getInputProps('name')}
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label="Ghi chú"
              placeholder="Tôi muốn được phục vụ tốt hơn"
              minRows={4}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />

            <Group justify="flex-end" mt="md">
              <Button className={classes.control} type="submit">Gửi tin nhắn</Button>
            </Group>
            </form>
          </div>
        </SimpleGrid>
      </div>
      <div className={classes.wrapperButtonModule}>
        <UnstyledButtonModule />
      </div>
      <div>
        <FaqSimple />
      </div>
    </>
  );
}