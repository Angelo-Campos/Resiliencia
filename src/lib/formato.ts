const formatoPEN = new Intl.NumberFormat("es-PE", {
  style: "currency",
  currency: "PEN",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
})

export function formatear(valor: number) {
  return formatoPEN.format(valor)
}
