import { useState } from "react";
import { PawPrint, Plus, Trash2, Edit } from "lucide-react";

export default function PetSection() {
  const [pets, setPets] = useState([
    { id: 1, name: "Bruno", species: "Dog", breed: "Labrador", age: "2 yrs" },
    { id: 2, name: "Kitty", species: "Cat", breed: "Persian", age: "1 yr" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [newPet, setNewPet] = useState({ name: "", species: "", breed: "", age: "" });

  const handleAddPet = () => {
    if (!newPet.name) return;
    setPets([...pets, { ...newPet, id: pets.length + 1 }]);
    setNewPet({ name: "", species: "", breed: "", age: "" });
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <PawPrint className="text-orange-600" /> My Pets
          </h2>
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
          >
            <Plus size={16} /> Add Pet
          </button>
        </div>

        {/* Pet List */}
        {pets.length === 0 ? (
          <p className="text-center text-slate-500 italic">No pets added yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pets.map((pet) => (
              <div
                key={pet.id}
                className="p-4 border border-slate-200 rounded-lg bg-slate-50 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-slate-800">{pet.name}</h3>
                <p className="text-sm text-slate-600">
                  {pet.species} • {pet.breed} • {pet.age}
                </p>
                <div className="mt-3 flex gap-3">
                  <button className="flex items-center gap-1 text-xs text-orange-600 hover:underline">
                    <Edit size={14} /> Edit
                  </button>
                  <button
                    onClick={() => setPets(pets.filter((p) => p.id !== pet.id))}
                    className="flex items-center gap-1 text-xs text-red-600 hover:underline"
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Pet Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">Add New Pet</h2>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Pet Name"
                value={newPet.name}
                onChange={(e) => setNewPet({ ...newPet, name: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-md"
              />
              <select
                value={newPet.species}
                onChange={(e) => setNewPet({ ...newPet, species: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-md"
              >
                <option value="">Select Species</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
              </select>
              <input
                type="text"
                placeholder="Breed"
                value={newPet.breed}
                onChange={(e) => setNewPet({ ...newPet, breed: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Age"
                value={newPet.age}
                onChange={(e) => setNewPet({ ...newPet, age: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-md"
              />
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleAddPet}
                className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
              >
                Save Pet
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
