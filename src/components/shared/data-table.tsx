import { cn } from "@/lib/utils"

export type ColumnConfig<T> = {
  key: keyof T
  label: string
  width?: string
  align?: 'left' | 'center' | 'right'
  render?: (value: T[keyof T], row: T) => React.ReactNode
}


type DataTableProps<T> = {
  data: T[]
  columns: ColumnConfig<T>[]
}

export function DataTable<T>({ data, columns }: DataTableProps<T>) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full text-sm table-fixed w-full">
        <thead className="bg-muted/40">
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className={cn(
                  "p-2 bg-foreground border-b font-medium text-left text-muted-foreground whitespace-nowrap uppercase",
                  col.align === "center" && "text-center",
                  col.align === "right" && "text-right",
                  col.width
                )}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-muted bg-background">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col) => (
                <td
                  key={String(col.key)}
                  className={cn(
                    "px-2 py-4 whitespace-nowrap truncate text-left",
                    col.align === "center" && "text-center",
                    col.align === "right" && "text-right",
                    col.width
                  )}
                >
                  {col.render
                    ? col.render(row[col.key], row)
                    : row[col.key] as React.ReactNode}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
