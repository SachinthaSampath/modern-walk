module.exports = async () => ({
  tenants: [
    {
      name: "store1",
      domains: [
        {
          development: "store1.modernwalk.local",
          stage: "store1.modernwalk.local",
          production: "store1.modernwalk.local",
        },
      ],
    },
    {
      name: "store2",
      domains: [
        {
          development: "store2.modernwalk.local",
          stage: "store2.modernwalk.local",
          production: "store2.modernwalk.local",
        },
      ],
    },
    {
      name: "store3",
      domains: [
        {
          development: "store3.modernwalk.local",
          stage: "store3.modernwalk.local",
          production: "store3.modernwalk.local",
        },
      ],
    },
  ],
});
