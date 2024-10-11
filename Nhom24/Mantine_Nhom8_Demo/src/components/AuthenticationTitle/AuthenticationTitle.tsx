import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './AuthenticationTitle.module.css';

export function AuthenticationTitle() {
  let navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);

  const handleHome = () => {
    let path = `/`;
    navigate(path);
  };

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <Container size={420} my={40} mt={90}>
      <Title ta="center" className={classes.title}>
        {isSignUp ? 'Tạo tài khoản mới' : 'Chào mừng bạn trở lại!'}
      </Title>
      <Text c={'gray'} ml={20}>
        {isSignUp ? 'Đăng ký tài khoản của bạn ngay bây giờ!' : 'Đăng nhập tài khoản của bạn ngay nào!!!'}
      </Text>
      <Paper withBorder shadow="md" p={50} mt={30} radius="md">
        {isSignUp && (
          <TextInput label="Tên" placeholder="Nhập tên của bạn" required />
        )}
        <TextInput label="Email" placeholder="Nhập email của bạn" required />
        <PasswordInput
          label="Mật khẩu"
          placeholder="Nhập mật khẩu của bạn"
          required
          mt="md"
        />
        {isSignUp && (
          <PasswordInput
            label="Nhập lại mật khẩu"
            placeholder="Xác nhận lại mật khẩu"
            required
            mt="md"
          />
        )}
        {!isSignUp && (
          <>
            <Group justify="space-between" mt="lg">
              <Checkbox label="Ghi nhớ" />
              <Anchor component="button" size="sm">
                Quên mật khẩu?
              </Anchor>
            </Group>
            <Button fullWidth mt="xl" onClick={handleHome}>
              Đăng nhập
            </Button>
          </>
        )}
        {isSignUp && (
          <Button fullWidth mt="xl">
            Đăng ký
          </Button>
        )}
        <Text c="dimmed" size="sm" ta="center" mt={50}>
          {isSignUp ? 'Đã có tài khoản? ' : 'Bạn chưa có tài khoản? '}
          <Anchor size="sm" component="button" onClick={toggleForm}>
            {isSignUp ? 'Đăng nhập' : 'Đăng ký ngay'}
          </Anchor>
        </Text>
      </Paper>
    </Container>
  );
}
