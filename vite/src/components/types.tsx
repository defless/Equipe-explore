export interface StoryContextValue {
  currentPage: number;
  restart: () => void;
  dispatch: React.Dispatch<unknown>;
}