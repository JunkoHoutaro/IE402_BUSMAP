import { Container, Title, Accordion, Grid, Image } from '@mantine/core';
import classes from './FaqSimple.module.css';
import img from '../../assets/images/img.svg'
const placeholder =
  'Nó không thể không nghe thấy tiếng kim rơi từ cách xa hơn nửa dặm nên nó sống sâu trong núi, nơi không có nhiều người hoặc Pokémon. Nó được sinh ra từ bùn dưới đáy đại dương. Trong môi trường vô trùng, vi trùng trong cơ thể nó không thể nhân lên và nó chết. Nó không có nhãn cầu nên không thể nhìn thấy. Nó kiểm tra môi trường xung quanh thông qua sóng siêu âm phát ra từ miệng.';

export function FaqSimple() {
  return (
    <Container size="xl" className={classes.wrapper}>
      <Grid className={classes.gridCol}>
        <Grid.Col  span={{ base: 12, md: 6 }}>
          <Title ta="center" className={classes.title}>
            Các câu hỏi thường gặp
          </Title>

          <Accordion variant="separated">
            <Accordion.Item className={classes.item} value="reset-password">
              <Accordion.Control>Làm cách nào tôi có thể đặt lại mật khẩu của mình?</Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="another-account">
              <Accordion.Control>Tôi có thể tạo thêm một tài khoản đó không?</Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="newsletter">
              <Accordion.Control>Làm thế nào tôi có thể đăng ký nhận bản tin hàng tháng?</Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="credit-card">
              <Accordion.Control>Bạn có lưu trữ thông tin thẻ tín dụng một cách an toàn không?</Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="payment">
              <Accordion.Control>Bạn làm việc với những hệ thống thanh toán nào?</Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Grid.Col>
        <Grid.Col  span={{ base: 12, md: 6 }}>
          <Image src={img} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}