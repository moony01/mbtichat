---
layout: post
title: Hướng dẫn sử dụng mbtiChat
image: '/images/userGuide/thumbnail-en.jpg'
---
Ứng dụng mbtiChat là một ứng dụng cho phép người dùng trò chuyện tự do với các trí tuệ nhân tạo (AI) dựa trên 16 loại MBTI. Ứng dụng này được phát triển với ý tưởng rằng người dùng có thể tò mò về các đặc điểm của các loại MBTI khác, mối quan hệ giữa các loại khác nhau và suy nghĩ hoặc hành vi của các loại khác nhau. Bây giờ chúng ta hãy tìm hiểu cách sử dụng ứng dụng mbtiChat.

## Giới thiệu về chức năng và trang trong ứng dụng
Ngoài khả năng trò chuyện với các trí tuệ nhân tạo, ứng dụng của chúng tôi còn có các chức năng và trang chi tiết khác như hướng dẫn, blog. Các chức năng và trang trong ứng dụng mbtiChat chủ yếu bao gồm **Chức năng Trò chuyện với AI** và **Blog**. Ngoài ra, có các chức năng chi tiết khác như trang Hướng dẫn người dùng và chức năng chọn ngôn ngữ, nhưng chúng ta sẽ tìm hiểu chi tiết về hai chức năng và trang chính này.

### 1. Chức năng Trò chuyện với AI
![Lựa chọn ngôn ngữ để trò chuyện với AI trong MBTI](/images/userGuide/userguide-1.jpg)

Chức năng Trò chuyện với AI cho phép bạn trò chuyện với các nhân vật MBTI đã được lựa chọn bằng cách nhấn vào nút [Bắt đầu trò chuyện] trên trang chính. AI được phát triển dựa trên phiên bản API **gpt-3.5**. Đầu tiên, để bắt đầu trò chuyện với AI, bạn cần **chọn ngôn ngữ để thay đổi ngôn ngữ của ứng dụng**.

![Lựa chọn nhân vật và nhấn nút Bắt đầu trò chuyện trong MBTI](/images/userGuide/userguide-2.jpg)

Để trò chuyện với AI, bạn có thể nhấn nút [Bắt đầu trò chuyện] dưới nhân vật trên trang chính. Mỗi nhân vật đã được học một loại MBTI. Bây giờ chúng ta hãy thử trò chuyện với nhân vật đã chọn. Chúng ta đã chuyển đến trang trò chuyện và bạn có thể thấy nhân vật giới thiệu bản thân và yêu cầu bạn cung cấp loại MBTI của mình trong hình ảnh dưới đây.

![Trang trò chuyện với AI trong MBTI](/images/userGuide/userguide-3.jpg)

Bạn có thể đặt câu hỏi cho AI mà không cần cung cấp loại MBTI của mình, nhưng nếu bạn muốn tìm hiểu về đặc điểm của một loại cụ thể, đoán loại của bạn dựa trên hành vi của bạn hoặc tìm hiểu về sự phù hợp giữa loại của bạn và loại AI, bạn cần cung cấp loại MBTI của mình cho AI. Bạn có thể hỏi nhân vật: "Có thể cho tôi biết đặc điểm của loại INTP?" Hoặc "Bạn có nghĩ rằng người bạn của tôi có thể là loại INTP khi anh ta không cảm thấy buồn?" Hoặc "Hãy cho tôi biết về sự phù hợp giữa loại INTP của bạn và loại ENFP của tôi."

Bằng cách đặt những câu hỏi như vậy, bạn có thể **hiểu được đặc điểm của một loại cụ thể**, **đoán loại của bạn dựa trên hành vi của bạn** và **tìm hiểu về sự phù hợp, lợi và hại giữa loại bạn và người bạn của bạn**. Ngoài ra, như được thể hiện trên hình ảnh trên, ứng dụng mbtiChat được vận hành thông qua quảng cáo và tài trợ, vì vậy sẽ có một thông báo hướng dẫn xuất hiện trong quá trình trò chuyện với nhân vật.

![Các chức năng sau khi trò chuyện với AI: Chia sẻ, biểu cảm, bình luận](/images/userGuide/userguide-7.jpg)

Bạn có thấy việc trò chuyện với AI hữu ích không? Nếu có, hãy chia sẻ ứng dụng mbtiChat với bạn bè và để lại nhiều bình luận! **Đừng lo lắng, nội dung trò chuyện trong ứng dụng này sẽ không được lưu trữ.**

### 2. Blog
![Trang Blog của ứng dụng mbtiChat](/images/userGuide/userguide-8.jpg)

Ứng dụng mbtiChat không chỉ có chức năng mà còn có mục Blog. Các bài viết trong blog chủ yếu có tính chất của một blog kỹ thuật, liên quan đến kỹ năng phát triển sử dụng trong quá trình phát triển ứng dụng mbtiChat.

## Phân tích và giới thiệu về kỹ thuật của ứng dụng
Ứng dụng mbtiChat là một ứng dụng web tĩnh. Ứng dụng web tĩnh có nội dung cố định và có các chức năng hoặc tương tác hạn chế. Mặc dù ứng dụng mbtiChat không lớn về quy mô, nhưng nó có các chức năng như blog và chọn ngôn ngữ vượt ra ngoài khả năng của ứng dụng web tĩnh. Vì vậy, tôi đã sử dụng **Jekyll làm framework để tạo các trang web tĩnh**.

Jekyll tạo các tệp HTML tĩnh dựa trên các mẫu và bố cục được chỉ định. Điều này giúp tái sử dụng các thành phần lặp lại một cách hiệu quả và áp dụng một thiết kế và bố cục nhất quán.

Chức năng chính của ứng dụng mbtiChat là khả năng trò chuyện với AI. AI sử dụng phiên bản API **gpt-3.5**. Để giao tiếp với API GPT, tôi sử dụng **Node.js** làm máy chủ. Ứng dụng di động được phát triển bằng cách sử dụng **React-Native-Webview** để tạo ứng dụng di động đáp ứng dựa trên công nghệ web.
