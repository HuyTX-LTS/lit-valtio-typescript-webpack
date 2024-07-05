export namespace TTimeLine {
  type AppState = {
    loading: boolean;
    timeLine: {
      from: "ai" | "user";
      text: string;
      image: string;
    }[];
    user: {
      inputValue: string;
    };
  };
}
