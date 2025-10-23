'use client'

interface SpecTableProps {
  data: any
}

export default function SpecTable({ data }: SpecTableProps) {
  if (data.title === "Urea 46% N") {
    return (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-neutral-50">
              <th className="border border-neutral-200 px-4 py-3 text-left font-semibold text-primary">Özellik</th>
              <th className="border border-neutral-200 px-4 py-3 text-left font-semibold text-primary">Değer</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(data.spec).map(([key, value]) => (
              <tr key={key} className="hover:bg-neutral-50">
                <td className="border border-neutral-200 px-4 py-3 font-medium">{key}</td>
                <td className="border border-neutral-200 px-4 py-3">{value as string}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div>
            <h3 className="font-semibold text-lg mb-3 text-primary">Ambalaj</h3>
            <ul className="space-y-2">
              {data.packaging.map((item: string, index: number) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-neutral-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3 text-primary">Teslim Şekilleri</h3>
            <ul className="space-y-2">
              {data.incoterms.map((item: string, index: number) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-neutral-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  if (data.title === "Bitum Çeşitleri") {
    return (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-neutral-50">
              <th className="border border-neutral-200 px-4 py-3 text-left font-semibold text-primary">Grade</th>
              <th className="border border-neutral-200 px-4 py-3 text-left font-semibold text-primary">Penetration</th>
              <th className="border border-neutral-200 px-4 py-3 text-left font-semibold text-primary">Softening Point</th>
              <th className="border border-neutral-200 px-4 py-3 text-left font-semibold text-primary">Ambalaj</th>
            </tr>
          </thead>
          <tbody>
            {data.grades.map((grade: any, index: number) => (
              <tr key={index} className="hover:bg-neutral-50">
                <td className="border border-neutral-200 px-4 py-3 font-medium">{grade.name}</td>
                <td className="border border-neutral-200 px-4 py-3">{grade.penetration || grade.viscosity || '-'}</td>
                <td className="border border-neutral-200 px-4 py-3">{grade.softeningPoint || '-'}</td>
                <td className="border border-neutral-200 px-4 py-3">{grade.packaging.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div className="text-center text-neutral-500">
      <p>Teknik özellikler yükleniyor...</p>
    </div>
  )
}
