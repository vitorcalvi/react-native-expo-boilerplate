import { sampleActions as actions } from "./sample-actions";
import { initialState, sampleReducer as reducer } from "./sample-reducer";

describe("SAMPLE", () => {
  describe("FETCH_SAMPLES_ASYNC", () => {
    const action = {
      type: actions.fetchSamplesAsync.done.type,
      payload: { text: "Async" },
    };

    it("ASYNCがセットされていることを確認", () => {
      const state = reducer(initialState, action);
      expect(state.text).toEqual("Async");
    });
  });

  describe("FETCH_SAMPLES_SYNC", () => {
    const action = {
      type: actions.fetchSamplesSync.type,
      payload: { text: "Sync" },
    };

    it("SYNCがセットされていることを確認", () => {
      const state = reducer(initialState, action);
      expect(state.text).toEqual("Sync");
    });
  });
});