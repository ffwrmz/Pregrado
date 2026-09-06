import numpy as np
from ovito.io import import_file    # Necesitan instalar la libreria de ovito con 'pip install ovito'
import time


frame = next(import_file('Atoms.data').frames)
positions = frame.particles.positions.array
ids = frame.particles.identifiers.array
cell = frame.cell.matrix
L = cell.diagonal()
O = cell[:, 3]
Rc = 3.0
nmax = np.floor(L / Rc).astype(np.uint16)
d = L / nmax

subcell_count = np.zeros(nmax, dtype=np.uint8)
subcell_atomids = np.zeros(np.concat((nmax, [16])), dtype=np.uint32)

tini = time.perf_counter()
for i, atom in enumerate(positions):
    n = list(np.floor((atom-O) / d).astype(np.uint16))
    count = subcell_count[tuple(n)]
    subcell_count[tuple(n)] += 1
    n.append(count)
    subcell_atomids[tuple(n)] = ids[i]

t = time.perf_counter()-tini
print("Subdivision hecha en {:.4f} s".format(t))
np.save('subcell_ids.npy', subcell_atomids)