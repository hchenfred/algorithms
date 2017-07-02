//1. create a map with node and indegree paris
//2. find the node with indegree = 0 and push the node to the queue.
//3. 

// while (!q.isEmpty()) {
//             DirectedGraphNode node = q.poll();
//             for (DirectedGraphNode n : node.neighbors) {
//                 map.put(n, map.get(n) - 1);
//                 if (map.get(n) == 0) {
//                     result.add(n);
//                     q.offer(n);
//                 }
//             }
//         }
//         return result;
