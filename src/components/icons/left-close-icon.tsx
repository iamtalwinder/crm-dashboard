import React from "react";
import { useResolvedTheme } from "@/lib/hooks";

const LeftCloseIcon: React.FC = () => {
  const { isDarkTheme } = useResolvedTheme();

  return isDarkTheme ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="28"
      height="28"
      viewBox="0 0 28 28"
    >
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAlVJREFUSEvFVu1OE1EUnGkRvwCLjTGGEMOb6JMYnkD5BX8gUf7UX+Ib9E3UJ9A30IQQNMYAosQI3dHZ3kuWdu9222zCTTbNpufeuWf2nDlD1FiSbgG4C8C/cwBaYVsG4G94fpP8M+k4VgVIWgCwDOAcgA/zc0HywvskGXg+PI5tAzgi+St1bimgJGfxEMAAwHGdm4cLmIEOgBsADuPFiuBjgJIWw6YTkj8nUVT2v6QlAPcA/CB5lgSUdAdAF8A3kv42My9JptosmaHTeNBlhoHGR02AxcMLoJf0FgFXAcxMY4qKQO8iyQPH5IChGhdIfp2Zw4qNkszcqas3Ajq772XV+GpTb0i8qHMRCXs7r7kxGhv6+AHJfYaXbkx5NHh3SyLQz4APBJ4BeFIFvt1jqtWc5ZEB74dmLm0BAwpY3+mx/3JL/dYQNLkqAN2fLQMOkROy1CCgRaFrwMcA9klaF8dWClAZNtrC+6yFd2CuLvmqyNDqtWLANZKfUxylAAl8OQeezg/Qydr4OAkwdMPatQCa0oMyofWtkpQC6+0BPk1BqSfLqjNcCSJbOssaLppObIuM5PE0RZP65hVF4wkyFxt/meRhCrChxh8yGaonKW27m9oD8byOtP13B2+3exyTwSvSVhBvK3ppljXBkmFj4h1AnbIVfaYpn0KT5Mm/ZOF2zPUN4AK1dmlNWowrvqbMREVfM/P0jzSWWcYqm+gpYv+ZnCSJQWuGrCpmKfevxVXXCHuS2HnlLjtOlmC8PAVuF1z59EY4cXNTbet3c8TqR1d+Vscw/wOGo3/1s9z++gAAAABJRU5ErkJggg=="
        x="0"
        y="0"
        width="28"
        height="28"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="28"
      height="28"
      viewBox="0 0 28 28"
    >
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAA05JREFUSEutlk1rE1EUht+TyUwymTuJMf3wo2KhwY+pFKSotCoUhO5cKGTt3xB/gLrXP6DbQt27kEDFoqUboVFLAwqK+NGYZG7aZmYyV2ZibGJ72zHt3d575rnnnXPueQlRlmVpRx0z6cZ0zXcacaEnKQijzS0RS5KreuRWNHsLpZKz3+fCQOkamdJZgkyeFB5EwgG+Oxgfb2FurtWOEQRrXMV6XEVG1VkrEeNNYePz4qbsmzKgYp6Zydpq04eo8Sg3DwGWpYEyjG1RnJdfrQP4c7Ft/A7gicmbqXp1nXGDNfD2eWM/iXbdH5412DA3eF2r42Nxq/tML3B0JskUJ83LzV/AstsXrBM0OamyaiLLh4SNxW2Ju4EKG5vOHQqsG+omsvzttrx/gWxseuhAMsrkGJ41zIyj26vFn2Flh+dGpnRkoGNlsXIgGSXB5rnLOZsrG0H1hsAwu0S1uls1ZvJX7wnQnSgXIdCT2trC/R1nLUtjzSNHePnVdwpK2fT0tL26HKb870rnr30QwDwE3hDhFoAre8Hray/P7rYfZhnjNiF/JY1UpiVrgRAocNcuv3xm5q8+INDtfoCwZhiczRh1yLLm3h8o6gClO5eQZdhRkgzr0rFGaelb8E5JJZVlKOhRnJynHtSlfYEoKMaFygClzl8/vvFu4atMJmmGgh7VywuPzfz0Q0Is+LfhkmYIIGD1DexUpJm/9pAQFlM0YCjp+OiP7QnQm+ue/1D4j11FzKu+8iICMGZcuDFILH9xkGvNWv9F03vBvYommCTtttB0H6Ui/++i2SVACpyYNbBRU9qN7zPTfv8mmF+yxn8GgddE4jZAl/vpw46SEZ626/cExCE+bcF1R6Z0k7VSsiz3yijK3o7HOwgKU04NbvQ95SXk4YlZo9HgRvBwB0e6BnBBYRNfcvyoVkGx6EW5eYQzKhubzvLyyXWgbbx6LUbHpZ06FGgb1ur1NTtd2+hokqVPpDn6N1F/ZRw6aWNxrscySmxiQWFjX3Kkeq1ghv2PTQxaDH6K7NXBXx0Zu6WPZIRJ0Xy7VtlEznNRKgVurj1ZCgUFKyvKQCubaJKrCTeu9GuEe+shMLjO6SQS1bjR8LRuq9/QfA/+kAPtUySr/xu0+czWasChUAAAAABJRU5ErkJggg=="
        x="0"
        y="0"
        width="28"
        height="28"
      />
    </svg>
  );
};

export default LeftCloseIcon;
