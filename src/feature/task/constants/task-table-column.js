"use client"

 const columns = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "inputText",
    header: "Input",
  },
  {
    accessorKey: "operation",
    header: "Operation",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");

      return (
        <span
          className={`px-2 py-1 rounded text-white text-xs ${
            status === "completed"
              ? "bg-green-500"
              : status === "failed"
              ? "bg-red-500"
              : "bg-yellow-500"
          }`}
        >
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",   
    cell: ({ row }) => {
      const date = row.getValue("createdAt");
      return new Date(date).toLocaleString();
    },
  },
];

export default columns